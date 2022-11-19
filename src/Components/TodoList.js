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
import {db} from "../firebase";


const TodoList = ({ deleteTodo, editTodo, toggleComplete }) => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const q = query(collection(db,"todos"));
        const unsub = onSnapshot(q, (querySnapshot)=>{
            let todosArray = [];
            querySnapshot.forEach((doc)=>{
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            const result = [...todosArray].sort((a,b) => a.created.seconds - b.created.seconds)
            setTodos(result);
        })
        return () => unsub();
    }, []);

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