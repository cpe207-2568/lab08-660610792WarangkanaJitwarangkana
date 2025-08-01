import React from 'react';
import type { TaskCardProps } from '../libs/types'; // Import as a type

// Task Card Component
const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, isDone }) => {
  const handleDoneClick = () => {
    console.log(`Task with ID ${id} is marked as done.`);
  };

  const handleDeleteClick = () => {
    console.log(`Task with ID ${id} is deleted.`);
  };

  return (
    <div className={`card mb-3 ${isDone ? 'bg-light' : ''}`}>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <h5 className={`card-title ${isDone ? 'text-decoration-line-through text-muted' : ''}`}>
              {title}
            </h5>
          </div>
          <div className="col-12 col-md-4">
            <p className="card-text">{description}</p>
          </div>
          <div className="col-6 col-md-2 d-grid">
            <button className="btn btn-success me-2" onClick={handleDoneClick}>Done</button>
          </div>
          <div className="col-6 col-md-2 d-grid">
            <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
