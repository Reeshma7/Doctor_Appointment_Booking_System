import {
  FaHome,
  FaUserMd,
  FaUsers,
  FaCalendarAlt,
  FaMoneyBill,
  FaSignOutAlt,
  FaTimes,
  FaPlusCircle
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function AdminSidebar({ open, setOpen }) {

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
        />
      )}

      <aside
        className={`admin-sidebar ${
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

          <NavLink
            to="/admin/dashboard"
            className="menu-link"
          >
            <li>
              <FaHome />
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to="/admin/doctors"
            className="menu-link"
          >
            <li>
              <FaUserMd />
              Doctors
            </li>
          </NavLink>

          <NavLink
            to="/admin/doctors/add"
            className="menu-link"
          >
            <li>
              <FaPlusCircle />
              Add Doctor
            </li>
          </NavLink>

          <NavLink
            to="/admin/patients"
            className="menu-link"
          >
            <li>
              <FaUsers />
              Patients
            </li>
          </NavLink>

          <NavLink
            to="/admin/appointments"
            className="menu-link"
          >
            <li>
              <FaCalendarAlt />
              Appointments
            </li>
          </NavLink>

          <NavLink
            to="/admin/payments"
            className="menu-link"
          >
            <li>
              <FaMoneyBill />
              Payments
            </li>
          </NavLink>

        </ul>

        <div
          className="logout"
          onClick={logout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </div>

      </aside>
    </>
  );
}

export default AdminSidebar;