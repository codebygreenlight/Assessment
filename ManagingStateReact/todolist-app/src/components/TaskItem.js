import React, { useState } from 'react';

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description
  });

  const handleEdit = () => {
    if (isEditing) {
      if (editData.title.trim() && editData.description.trim()) {
        onEdit(task.id, editData);
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              placeholder="Task title"
            />
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              placeholder="Task description"
            />
          </div>
        ) : (
          <div className="task-text">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className="task-date">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>
      
      <div className="task-actions">
        <button className="edit-button" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem; 