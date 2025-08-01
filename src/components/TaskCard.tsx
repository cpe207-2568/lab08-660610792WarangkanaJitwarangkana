import React from 'react';
import type { TaskCardProps } from '../libs/types';

// Task Card Component
const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, isDone }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-12 col-md-4">
            <p className="card-text">{description}</p>
          </div>
          <div className="col-6 col-md-2 d-grid">
            <button className="btn btn-success me-2">Done</button>
          </div>
          <div className="col-6 col-md-2 d-grid">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
