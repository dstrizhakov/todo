import React from 'react';

const Todoitem = () => {
    return (
        <div className="todo-body">
            <div className="todo-main">
                <div className="todo-title"> Some todo title</div>
                <div className="todo-files">file</div>
                <div className="todo-status">Done</div>
                <button>X</button>
            </div>
            <div className="todo-progress">In progress</div>
        </div>
    );
};

export default Todoitem;