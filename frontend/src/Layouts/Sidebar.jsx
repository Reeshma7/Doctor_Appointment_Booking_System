import { useState } from "react";
import {
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./layout.css";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <FaBars className="menu-icon" onClick={() => setOpen(true)} />
        <div className="topbar-brand">
          <h3>MediCare</h3>
          <span>Patient Portal</span>
        </div>
      </div>

      {/* BACKDROP */}
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>

        <div className="sidebar-header">
          <div className="brand">
            
            <div>
              <h2>MediCare</h2>
             
            </div>
          </div>

          <FaTimes className="close" onClick={() => setOpen(false)} />
        </div>

        <ul className="menu">
          <li><FaHome /> Dashboard</li>
          <li><FaUserMd /> Doctors</li>
          <li><FaCalendarAlt /> Appointments</li>

          <li className="logout" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>

      </aside>
    </>
  );
}

export default Sidebar;