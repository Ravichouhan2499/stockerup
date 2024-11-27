import React from "react";
import "./adminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Admin<span>Panel</span></h2>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#dashboard" className="active">Dashboard</a></li>
            <li><a href="#users">Users</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="main">
        {/* Header */}
        <header className="header">
          <h1>Admin Dashboard</h1>
          <div className="profile">
            <img
              src="https://via.placeholder.com/40"
              alt="Admin"
              className="profile-img"
            />
            <span className="profile-name">Admin</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="content">
          <div className="cards">
            <div className="card">
              <h3>Total Users</h3>
              <p>1,234</p>
            </div>
            <div className="card">
              <h3>Active Sessions</h3>
              <p>120</p>
            </div>
            <div className="card">
              <h3>Pending Tasks</h3>
              <p>15</p>
            </div>
          </div>
          <div className="chart">
            <h2>Analytics Overview</h2>
            <p>Placeholder for charts or graphs.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
