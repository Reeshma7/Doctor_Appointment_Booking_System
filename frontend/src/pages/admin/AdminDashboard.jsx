import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      
      <div className="admin-header-title">
        <h2>Admin Dashboard</h2>
        <p>Welcome back, manage your hospital system</p>
      </div>

      
      <div className="admin-stats">

        <div className="stat-card blue">
          <h4>Doctors</h4>
          <h2>24</h2>
        </div>

        <div className="stat-card green">
          <h4>Patients</h4>
          <h2>120</h2>
        </div>

        <div className="stat-card orange">
          <h4>Appointments</h4>
          <h2>56</h2>
        </div>

        <div className="stat-card red">
          <h4>Revenue</h4>
          <h2>₹48K</h2>
        </div>

      </div>

      
      <div className="admin-grid">

        
        <div className="panel">

          <h3>Recent Appointments</h3>

          <div className="list-item">
            <div>
              <strong>Dr. John</strong>
              <span>Cardiologist</span>
            </div>
            <small>Today</small>
          </div>

          <div className="list-item">
            <div>
              <strong>Dr. Sarah</strong>
              <span>Neurologist</span>
            </div>
            <small>Yesterday</small>
          </div>

          <div className="list-item">
            <div>
              <strong>Dr. David</strong>
              <span>General</span>
            </div>
            <small>2 days ago</small>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="panel">

          <h3>System Status</h3>

          <div className="status success">✔ All Systems Active</div>
          <div className="status warning">⚠ 2 Pending Approvals</div>
          <div className="status info">ℹ Backup Completed</div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;