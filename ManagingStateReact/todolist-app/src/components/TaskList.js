import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
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

export default TaskList; 