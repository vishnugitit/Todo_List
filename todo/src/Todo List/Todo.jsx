import React, { useState } from "react";
import './Todo.css'
function Todo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editIndex, setEditIndex] = useState(null);
  
    // Handle input changes
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    // Add or update a task
    const addOrUpdateTask = () => {
      if (inputValue.trim()) {
        if (editIndex !== null) {
          const updatedTasks = tasks.map((task, index) =>
            index === editIndex ? inputValue.trim() : task
          );
          setTasks(updatedTasks);
          setEditIndex(null);
        } else {
          setTasks([...tasks, inputValue.trim()]);
        }
        setInputValue("");
      }
    };
  
    // Delete a task
    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  
    // Edit a task
    const editTask = (index) => {
      setInputValue(tasks[index]);
      setEditIndex(index);
    };
  
    return (
      <div className="app-container">
        <div className="todo-container">
          <h1 className="title">Get Things Done!</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="What is the task today?"
              value={inputValue}
              onChange={handleInputChange}
              className="task-input"
            />
            <button onClick={addOrUpdateTask} className="add-btn">
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <span className="task-text">{task}</span>
                <div className="action-buttons">
                  <button onClick={() => editTask(index)} className="edit-btn">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Todo
