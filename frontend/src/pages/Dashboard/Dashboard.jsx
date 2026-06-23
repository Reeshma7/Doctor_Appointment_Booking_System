import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h2>Welcome back, {user.fullName || "User"}</h2>
        <p>Your health overview at a glance</p>
      </div>

      {/* STATS */}
      <div className="stats">

        <div className="card">
          <h4>Appointments</h4>
          <h2>5</h2>
          <p>Upcoming this month</p>
        </div>

        <div className="card">
          <h4>Next Visit</h4>
          <h2>Oct 12</h2>
          <p>Doctor consultation</p>
        </div>

        <div className="card">
          <h4>Vitals</h4>
          <h2>120/80</h2>
          <p>Blood Pressure</p>
        </div>

        <div className="card">
          <h4>Health Status</h4>
          <h2>Good</h2>
          <p>Stable condition</p>
        </div>

      </div>

      {/* GRID */}
      <div className="grid">

        <div className="box">

          <div className="box-title">Upcoming Appointments</div>

          <div className="item">
            <div>
              <strong>Dr. John Smith</strong>
              <small>Cardiologist</small>
            </div>
            <span>12 Nov</span>
          </div>

          <div className="item">
            <div>
              <strong>Dr. Sarah Khan</strong>
              <small>Neurologist</small>
            </div>
            <span>15 Nov</span>
          </div>

          <div className="item">
            <div>
              <strong>Dr. David</strong>
              <small>General</small>
            </div>
            <span>18 Nov</span>
          </div>

        </div>

        <div className="box">

          <div className="box-title">Health Alerts</div>

          <div className="alert success">Annual Checkup Due</div>
          <div className="alert warning">Blood Report Ready</div>
          <div className="alert info">Prescription Updated</div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;