import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('all'); // 'all', 'done', 'notDone'

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false
    };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  // Toggle task completion
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    ));
  };

  // Edit task
  const editTask = (taskId, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, description: newDescription } : task
    ));
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <AddTask onAddTask={addTask} />
        
        <div className="filter-controls">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'notDone' ? 'active' : ''}`}
            onClick={() => setFilter('notDone')}
          >
            Active
          </button>
          <button 
            className={`filter-btn ${filter === 'done' ? 'active' : ''}`}
            onClick={() => setFilter('done')}
          >
            Completed
          </button>
        </div>

        <ListTask
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          onEditTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
