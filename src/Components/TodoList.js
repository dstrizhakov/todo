import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import {
    collection,
    onSnapshot,
    query,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import {db} from "../firebase_config";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const q = query(collection(db,"todos"));
        const unsub = onSnapshot(q, (querySnapshot)=>{
            let todosArray = [];
            querySnapshot.forEach((doc)=>{
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArray);
        })
        return () => unsub();
    }, []);

    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            isdone:!todo.isdone
        });

    };

    return (
        <div className="todolist">
            {!!todos
                ? (todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />))
                : "Todos list is empty"
            }
        </div>
    );
};

export default TodoList;