
import './App.less';
import { useState } from "react";
import {db} from "./firebase_config";
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import TodoList from "./Components/TodoList";



function App() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDetails, setTodoDetails] = useState("");
    const [todoDeadline, setTodoDeadline] = useState("");

    const toTimestamp = (strDate) => {
        var datum = Date.parse(strDate);
        return {
            seconds: datum/1000,
            nanoseconds: 0
        }
    }

    const addTodo = async (event) => {
        event.preventDefault();
        if(todoTitle.length > 3){
            await addDoc(collection(db, "todos"), {
                isdone: false,
                created: serverTimestamp(),
                deadline: toTimestamp(todoDeadline),
                todo: todoTitle,
                details: todoDetails,
            })
                .then(() => {
                    console.log('Message submitted 👍' );
                })
                .catch((error) => {
                    console.log(error.message);
                });
            setTodoDetails('');
            setTodoTitle('');
            setTodoDeadline('')
        }
    }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
        <main className="App-body">
            <form className="App-form" action="submit">
                <input type="text" value={todoTitle} onChange={e => setTodoTitle(e.target.value)} placeholder="Todo title"/>
                <textarea name="Details" value={todoDetails} onChange={(e)=> setTodoDetails(e.target.value)} placeholder="Todo details" id=""  rows="5"></textarea>
                <div className="form-data">
                    <input type="file"/>
                    <input type="date" value={todoDeadline} onChange={e => setTodoDeadline(e.target.value)}/>
                </div>
                <button type="submit" onClick={event =>addTodo(event)}>Create todo</button>
            </form>
            <section className="App-todolist">
                <TodoList/>
            </section>
        </main>
    </div>
  );
}

export default App;
