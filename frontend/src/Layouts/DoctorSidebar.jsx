import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaPrescriptionBottleAlt,
  FaClock,
  FaMoneyBillWave,
  FaUser,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";
import { Link } from "react-router-dom";

function DoctorSidebar({ open, setOpen }) {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      {open && (
        <div
          className="backdrop"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`doctor-sidebar ${
          open ? "open" : ""
        }`}
      >
        <div className="sidebar-header">
          <h2>MediCare</h2>

          <FaTimes
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="menu">
          <li>
            <Link to="/doctor/dashboard">
              <FaHome /> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/doctor/appointments">
              <FaCalendarAlt />
              Appointments
            </Link>
          </li>

          <li>
            <Link to="/doctor/patients">
              <FaUsers />
              Patients
            </Link>
          </li>

          <li>
            <Link to="/doctor/prescriptions">
              <FaPrescriptionBottleAlt />
              Prescriptions
            </Link>
          </li>

          <li>
            <Link to="/doctor/availability">
              <FaClock />
              Availability
            </Link>
          </li>

          <li>
            <Link to="/doctor/earnings">
              <FaMoneyBillWave />
              Earnings
            </Link>
          </li>

          <li>
            <Link to="/doctor/profile">
              <FaUser />
              Profile
            </Link>
          </li>
        </ul>

        <div
          className="logout"
          onClick={logout}
        >
          <FaSignOutAlt />
          Logout
        </div>
      </aside>
    </>
  );
}

export default DoctorSidebar;