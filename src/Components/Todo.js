import React, {useState} from 'react';
import File from "./File";

const Todo = ({todo, deleteTodo, toggleComplete, editTodo}) => {

    const [editMode, setEditMode] = useState(false);
    const [newDeadline, setNewDeadline] = useState({});
    const [newTitle, setNewTitle] = useState('New title');
    const [newDetails, setNewDetails] = useState('New details');
    const [newFiles, setNewFiles] = useState();



    const setEdit = () => {
        /*Convert unix time to date*/
        const dateFormat = new Date(todo.deadline.seconds * 1000)
        const year = dateFormat.getFullYear()
        const month = (dateFormat.getMonth()+1)
        const day = dateFormat.getDate()
        const dateString = year.toString() + "-" +
            (month.toString().length === 1 ? +"0"+ month.toString() : month.toString())
            + "-" + (day.toString().length === 1 ? +"0" + day.toString(): day.toString())

        /*Update new date for inputs*/
        setNewDeadline(dateString);
        setNewTitle(todo.todo);
        setNewDetails(todo.details)

        setEditMode((prevState)=> !prevState);
    }
    const writeEdit = (e) => {
        e.preventDefault();
        editTodo(todo, newDeadline, newTitle, newDetails);
        setEditMode((prevState)=> !prevState);
    }

    return (
        <> {editMode
            ? <div className="todo-edit">
                <form className="edit-form" action="submit">
                    <h2>Edit todo</h2>
                    <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Todo title"/>
                    <textarea name="Details" value={newDetails} onChange={(e)=> setNewDetails(e.target.value)} placeholder="Todo details" id=""  rows="5"></textarea>
                    <div className="edit-data">
                        <input type="file"/>
                        <input type="date" value={newDeadline} onChange={e => setNewDeadline(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={e => writeEdit(e)}>Save todo</button>
                </form>
            </div>
            : <div></div>
        }

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
                    ? <File url={todo.files}/>
                    : <p></p>
                }
            </div>
            <div className="todo-progress">
                <div >{todo.isdone
                ?<p className="green">Done</p>
                :<p className="red">In progress</p>
                }
                </div>

            </div>
            <div className="todo-control">
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={setEdit}>Edit todo</button>
                <button onClick={() => toggleComplete(todo)}>{todo.isdone?"In progress":"Done"}</button>
            </div>
        </div>
        </>
    );
};

export default Todo;