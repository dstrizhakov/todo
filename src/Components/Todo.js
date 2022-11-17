import React from 'react';

const Todo = ({todo, deleteTodo, toggleComplete}) => {
    return (
        <div className="todo">
            <div className="todo-main">
                <h3 className="todo-title">{todo.todo}</h3>
                <p>{todo.details}</p>
            </div>
            <div className="todo-progress">
                <div >{todo.isdone
                ?<p className="green">Done</p>
                :<p className="red">In progress</p>
                }
                </div>
                <button onClick={ () => toggleComplete(todo) }>Toggle</button>
            </div>
            <button onClick={ () => deleteTodo(todo.id) }>x</button>
        </div>
    );
};

export default Todo;