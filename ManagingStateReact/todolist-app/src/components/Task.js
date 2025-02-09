import React, { useState } from 'react';

function Task({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing && editDescription.trim()) {
      onEdit(task.id, editDescription);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && editDescription.trim()) {
      onEdit(task.id, editDescription);
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.isDone ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span 
            className="task-description"
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.description}
          </span>
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

export default Task; 