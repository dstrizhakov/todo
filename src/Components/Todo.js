import React from 'react';

const Todo = ({todo, deleteTodo, toggleComplete}) => {
console.log (todo);
    return (
        <div className="todo">
            <div className="todo-main">
                <h2 className="todo-title">{todo.todo}</h2>
                <p>{todo.details}</p>
                <div className="todo-timestamp">
                    {todo.created
                        ?<p>Created: {new Date(todo.created.seconds*1000).toString()}</p>
                        :<p>Created: no date</p>
                    }
                    {todo.deadline
                        ?<p>Deadline: {new Date(todo.deadline.seconds*1000).toString()}</p>
                        :<p>Deadline: no date</p>
                    }
                </div>

            </div>
            <div className="todo-progress">
                <div >{todo.isdone
                ?<p className="green">Done</p>
                :<p className="red">In progress</p>
                }
                </div>
                <button onClick={() => toggleComplete(todo)}>Toggle</button>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>x</button>
        </div>
    );
};

export default Todo;