import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-info">
                        <span className="stat-value">24</span>
                        <span className="stat-label">Total Students</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                        <span className="stat-value">18</span>
                        <span className="stat-label">Active Students</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📚</div>
                    <div className="stat-info">
                        <span className="stat-value">4</span>
                        <span className="stat-label">Total Courses</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📋</div>
                    <div className="stat-info">
                        <span className="stat-value">42</span>
                        <span className="stat-label">Marked Today</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header">
                        <h3>Quick Actions</h3>
                    </div>
                    <div className="quick-actions">
                        <Link to="/reports/attendance" className="btn btn-primary">Mark Attendance</Link>
                        <Link to="/students/create" className="btn btn-secondary">Add Student</Link>
                        <Link to="/courses" className="btn btn-secondary">View Courses</Link>
                        <Link to="/recent-absences" className="btn btn-outline">View Absences</Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Recent Activity</h3>
                    </div>
                    <ul className="activity-list">
                        <li className="activity-item">
                            <span className="activity-text">Amadou Jallow marked present htmlFor Web Development</span>
                            <span className="activity-time">2 hours ago</span>
                        </li>
                        <li className="activity-item">
                            <span className="activity-text">Fatou Ceesay marked absent htmlFor Database Management</span>
                            <span className="activity-time">3 hours ago</span>
                        </li>
                        <li className="activity-item">
                            <span className="activity-text">Lamin Touray marked late htmlFor Programming Basics</span>
                            <span className="activity-time">4 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}