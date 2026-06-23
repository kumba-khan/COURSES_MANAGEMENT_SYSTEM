import { Link } from "react-router-dom";
import { getStudentsStats } from "../services/StudentService";
import { useEffect, useState } from "react";
import { getCoursesStats } from "../services/CourseService";

export default function Dashboard() {
    const [studentStats, setStudentStats] = useState(null);
    const [courseStats, setCourseStats] = useState(null);

    useEffect(() => {
        const fetchCourseStats = async () => {
            try {
                const data = await getCoursesStats();
                setCourseStats(data);
            } catch (error) {
                console.error(error);
            }
        }
        
        const fetchStudentStats = async () => {
            try {
                const data = await getStudentsStats();
                setStudentStats(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudentStats();
        fetchCourseStats();
    }, []);

    
    return (
        <div className="dashboard">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-info">
                        <span className="stat-value">{studentStats?.total}</span>
                        <span className="stat-label">Total Students</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                        <span className="stat-value">{studentStats?.active}</span>
                        <span className="stat-label">Active Students</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📚</div>
                    <div className="stat-info">
                        <span className="stat-value">{courseStats?.total}</span>
                        <span className="stat-label">Total Courses</span>
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
            </div>
        </div>
    )
}