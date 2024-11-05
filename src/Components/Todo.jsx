import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "task/add", payload: task });
    setTask("") ;
    return 
  };

  const handleTaskDelete = (id) => {
    return dispatch({type: "task/delete", payload: id}) ;
  }

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>
        <div className="row">

          <form onSubmit={handleFormSubmit}>
            <input
              id="input-box"
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
          </form>

        </div>
        <ul id="list-container">
          {tasks.map((task, idx) => {
            return (
              <li key={idx}>
                <p>
                  {idx}: {task}
                </p>
                <div>
                  {" "}
                  <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleTaskDelete(idx)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
