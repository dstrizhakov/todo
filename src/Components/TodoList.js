import React from 'react';
import Todo from "./Todo";



const TodoList = ({ todos, deleteTodo, updateTodo, toggleComplete, editCurrentTodo, deleteFile}) => {

    return (
        <div className="todolist">
            {(todos.length !== 0)
                ? (todos.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                    toggleComplete={toggleComplete}
                    editCurrentTodo={editCurrentTodo}
                    deleteFile={deleteFile}
                />))
                : <h2>Todo list is empty</h2>
            }
        </div>
    );
};

export default TodoList;