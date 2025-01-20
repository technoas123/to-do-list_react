import React, { useState } from 'react';

function TodoList() {
    // Initialize the state
    const [tasks, setTasks] = useState([]);    // Tasks state
    const [newTask, setNewTask] = useState(''); // New task state
  
    // Function to add a new task
    const addTask = () => {
      if (newTask.trim() === '') return;  // Don't add empty tasks
      setTasks([...tasks, newTask]);      // Add new task to the list
      setNewTask('');                     // Clear the input field
    };
  
    return (
      <div className="todo-list">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Updates newTask on input change
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li> // Render tasks
          ))}
        </ul>
      </div>
    );
}

export default TodoList;
