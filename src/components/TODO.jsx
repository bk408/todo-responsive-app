import { useState } from "react";

const TODO = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddBtn = () => {
    setTask([...task, newTask]);
    setNewTask("");
  };

  const deleteBtn = (index) => {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  };

  return (
    <div className="container">
      <h1>
        TODO <span>LIST</span>
      </h1>
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddBtn}>
        Add
      </button>

      <div className="task-list">
        {task.map((tsk, index) => (
          <ul key={index}>
            <li> {tsk} </li>
            <div className="buttons">
              <button className="delete-btn" onClick={() => deleteBtn(index)}>
                Delete
              </button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TODO;
