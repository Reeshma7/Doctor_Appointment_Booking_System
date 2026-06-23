import "./layout.css";

function Header() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const imageUrl = user.profileImage
    ? `http://localhost:5000/uploads/${user.profileImage}`
    : "https://i.pravatar.cc/40";

  return (
    <header className="header">

      <div className="header-left">
        <h2>Dashboard</h2>
      </div>

      <div className="header-right">
        <span className="icon">🔔</span>
        <span className="icon">⚙️</span>

        <div className="profile">
          <img src={imageUrl} alt="profile" />
          <div className="profile-text">
            <span className="name">{user.fullName}</span>
            <span className="role">Patient</span>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;