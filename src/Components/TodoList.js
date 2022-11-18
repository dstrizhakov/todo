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
import { orderByChild } from "firebase/database";
import {db} from "../firebase_config";


const TodoList = ({toTimestamp}) => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const q = query(collection(db,"todos"));
        const unsub = onSnapshot(q, (querySnapshot)=>{
            let todosArray = [];
            querySnapshot.forEach((doc)=>{
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            const result = [...todosArray].sort((a,b) => a.created.seconds - b.created.seconds)
            console.log(result)
            setTodos(result);
        })
        return () => unsub();
    }, []);

    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };
    const editTodo = async (todo, deadline, title, details) => {
        await updateDoc(doc(db, "todos", todo.id), {
            deadline: toTimestamp(deadline),
            todo: title,
            details: details,
        });
    };
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            isdone:!todo.isdone
        });

    };

    return (
        <div className="todolist">
            {(todos.length !== 0)
                ? (todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                />))
                : <h2>Todo list is empty</h2>
            }
        </div>
    );
};

export default TodoList;