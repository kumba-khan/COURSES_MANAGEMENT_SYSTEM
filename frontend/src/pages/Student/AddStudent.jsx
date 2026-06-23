import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();
    return (
        <div className="card">
          <div className="card-header">
            <h2>Add New Student</h2>
            <button onClick={()=>navigate(-1)} className="btn btn-outline">Back</button>
          </div>

          <form action="/students" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="Enter student name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required placeholder="student@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder="Phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status *</label>
                <select id="status" name="status" required>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="graduated">Graduated</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary" >Create Student</button>
              <Link to="/students" className="btn btn-outline">Cancel</Link>
            </div>
          </form>
        </div>
    )
}