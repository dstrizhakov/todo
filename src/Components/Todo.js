import React from 'react';
import File from "./File";

const Todo = ({todo, deleteTodo, toggleComplete, editCurrentTodo}) => {

    return (
        <>
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
            <div className="todo-files">
                {todo.files
                    ? <File url={todo.files} name="file"/>
                    : <p></p>
                }
            </div>
            <div className="todo-progress">
                <div >{todo.isdone
                ?<p className="green">Done</p>
                :<p className="yellow">In progress</p>
                }
                    {todo.deadline&&todo.created
                        ? (todo.deadline.seconds - todo.created.seconds < 0)&&<p className="red">Task expired!</p>
                        : <p></p>
                    }
                </div>

            </div>
            <div className="todo-control">
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={(e) => editCurrentTodo(todo)}>Edit todo</button>
                <button onClick={() => toggleComplete(todo)}>{todo.isdone?"In progress":"Done"}</button>
            </div>
        </div>
        </>
    );
};

export default Todo;