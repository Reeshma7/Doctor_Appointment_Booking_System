import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DoctorList.css";

function DoctorList() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/doctors/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDoctors(res.data.doctors || []);
    } catch (error) {
      console.error(
        "Error Fetching Doctors:",
        error.response?.data || error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/doctors/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/doctors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDoctors(
        doctors.filter(
          (doctor) => doctor._id !== id
        )
      );

      alert("Doctor Deleted Successfully");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="doctor-list">
        <h2>Loading Doctors...</h2>
      </div>
    );
  }

  return (
    <div className="doctor-list">
      <div className="doctor-header">
        <h2>Doctors Management</h2>

        <button
          onClick={() =>
            navigate("/admin/doctors/add")
          }
        >
          + Add Doctor
        </button>
      </div>

      {doctors.length === 0 ? (
        <div className="empty-state">
          <h3>No Doctors Found</h3>
          <p>Create your first doctor account.</p>
        </div>
      ) : (
        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div
              className="doctor-card"
              key={doctor._id}
            >
              <img
                src={
                  doctor.profileImage
                    ? `http://localhost:5000/uploads/${doctor.profileImage}`
                    : "https://i.pravatar.cc/150"
                }
                alt={doctor.fullName}
                className="doctor-image"
              />

              <h3>{doctor.fullName}</h3>

              <p>
                🏥 <strong>Department:</strong>{" "}
                {doctor.doctorDetails?.department ||
                  "N/A"}
              </p>

              <p>
                🩺 <strong>Specialization:</strong>{" "}
                {doctor.doctorDetails
                  ?.specialization || "N/A"}
              </p>

              <p>
                ⏳ <strong>Experience:</strong>{" "}
                {doctor.doctorDetails?.experience ||
                  0}{" "}
                Years
              </p>

              <p>
                💰 <strong>Fee:</strong> ₹
                {doctor.doctorDetails
                  ?.consultationFee || 0}
              </p>

              <p>
                🎓 <strong>Qualification:</strong>{" "}
                {doctor.doctorDetails
                  ?.qualification || "N/A"}
              </p>

              <p>
                📧 <strong>Email:</strong>{" "}
                {doctor.email}
              </p>

              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(doctor._id)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(doctor._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DoctorList;