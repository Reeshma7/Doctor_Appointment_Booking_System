import "./DoctorDashboard.css";

function DoctorDashboard() {
  return (
    <div className="doctor-dashboard">

      <div className="page-title">
        <h2>Doctor Dashboard</h2>
        <p>
          Welcome back Doctor 👨‍⚕️
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Today's Appointments</h4>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <h4>Total Patients</h4>
          <h2>145</h2>
        </div>

        <div className="stat-card">
          <h4>Earnings</h4>
          <h2>₹12,500</h2>
        </div>

        <div className="stat-card">
          <h4>Notifications</h4>
          <h2>5</h2>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="panel">
          <h3>Today's Appointments</h3>

          <div className="list-item">
            <span>Patient A</span>
            <small>10:00 AM</small>
          </div>

          <div className="list-item">
            <span>Patient B</span>
            <small>11:00 AM</small>
          </div>

          <div className="list-item">
            <span>Patient C</span>
            <small>12:00 PM</small>
          </div>
        </div>

        <div className="panel">
          <h3>Upcoming Patients</h3>

          <div className="list-item">
            <span>John</span>
            <small>Tomorrow</small>
          </div>

          <div className="list-item">
            <span>Sarah</span>
            <small>22 Jun</small>
          </div>

          <div className="list-item">
            <span>David</span>
            <small>23 Jun</small>
          </div>
        </div>

      </div>

    </div>
  );
}

export default DoctorDashboard;