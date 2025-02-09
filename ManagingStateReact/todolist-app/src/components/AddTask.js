import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask(description);
      setDescription('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter new task..."
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask; 