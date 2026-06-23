import "./AdminLayout.css";

function AdminHeader({ setOpen }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const imageUrl = user.profileImage
    ? `http://localhost:5000/uploads/${user.profileImage}`
    : "https://i.pravatar.cc/40";

  return (
    <header className="admin-header">

      <div className="admin-header-left">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
        <h2>Admin Panel</h2>
      </div>

      <div className="admin-header-right">

        <span className="icon">🔔</span>

        <div className="admin-profile">
          <img src={imageUrl} alt="admin" />
          <div className="admin-info">
            <span className="name">{user.fullName || "Admin"}</span>
            
          </div>
        </div>

      </div>

    </header>
  );
}

export default AdminHeader;