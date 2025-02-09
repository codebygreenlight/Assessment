import React from 'react';
import Task from './Task';

function ListTask({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks available. Add a new task to get started!</div>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
          onEdit={onEditTask}
        />
      ))}
    </ul>
  );
}

export default ListTask; 