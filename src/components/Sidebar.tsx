import React from 'react';
import type { SidebarProps } from '../libs/types';

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ userName, type }) => {
  return (
    <aside
      className="d-flex flex-column p-3"
      style={{
        width: "200px",
        backgroundColor: "#f2f2f2",
        justifyContent: "space-between",
      }}
    >
      <nav className="nav flex-column gap-2">
        <h5>Menu</h5>
        <a className="nav-link active" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Note
        </a>
        <a className="nav-link" href="#">
          About
        </a>
      </nav>
      <div className="fw-bold text-muted">
        <p>{userName} : {type}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
