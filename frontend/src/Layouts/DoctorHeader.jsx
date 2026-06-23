function DoctorHeader({ setOpen }) {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const imageUrl = user.profileImage
    ? `http://localhost:5000/uploads/${user.profileImage}`
    : "https://i.pravatar.cc/150";

  return (
    <header className="doctor-header">
      <div className="doctor-header-left">
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        <h2>Doctor Panel</h2>
      </div>

      <div className="doctor-profile">
        <img
          src={imageUrl}
          alt="doctor"
        />

        <span>
          {user.fullName || "Doctor"}
        </span>
      </div>
    </header>
  );
}

export default DoctorHeader;