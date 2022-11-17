
import './App.less';
import {useState} from "react";




function App() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDetails, setTodDetails] = useState("");
    const addTodo = (event) => {
        event.preventDefault();
    /*    if((todoTitle.length > 3) && (todoDetails.length > 3)) {
            db.collection("todos").add({
                todo_title: todoTitle,
                todo_details: todoDetails,
                is_done: false,
                date_created: firebase.firestore.FieldValue.serverTimestamp(),
            })
            setTodoTitle("");
        }*/
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
        <main className="App-body">
            <form className="App-form" action="submit">
                <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} placeholder="Todo title"/>
                <textarea name="Details" value={todoDetails} onChange={(e)=> setTodDetails(e.target.value)} placeholder="Todo details" id=""  rows="5"></textarea>
                <input type="file"/>
                <button type="submit" onClick={event =>addTodo(event)}>Create todo</button>
            </form>
            <section className="App-todolist">
                TODOs will be here
            </section>
        </main>
    </div>
  );
}

export default App;
