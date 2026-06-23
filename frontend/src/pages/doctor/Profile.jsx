import { useState } from "react";
import axios from "axios";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [formData, setFormData] = useState({
    fullName: user.fullName || "",
    email: user.email || "",
    mobileNumber: user.mobileNumber || "",
    address: user.address || "",

    specialization:
      user.doctorDetails?.specialization || "",

    qualification:
      user.doctorDetails?.qualification || "",

    department:
      user.doctorDetails?.department || "",

    experience:
      user.doctorDetails?.experience || "",

    consultationFee:
      user.doctorDetails?.consultationFee || "",

    about:
      user.doctorDetails?.about || "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/doctors/${user._id}`,
        {
          fullName:
            formData.fullName,

          mobileNumber:
            formData.mobileNumber,

          address:
            formData.address,

          doctorDetails: {
            specialization:
              formData.specialization,

            qualification:
              formData.qualification,

            department:
              formData.department,

            experience:
              formData.experience,

            consultationFee:
              formData.consultationFee,

            about:
              formData.about,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Profile Updated Successfully"
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data
          ?.message ||
          "Update Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doctor-profile-page">

      {/* TOP CARD */}

      <div className="profile-top-card">

        <img
          src={
            user.profileImage
              ? `http://localhost:5000/uploads/${user.profileImage}`
              : "https://i.pravatar.cc/150"
          }
          alt="doctor"
        />

        <div className="profile-info">

          <h2>
            {user.fullName}
          </h2>

          <p>
            {
              user.doctorDetails
                ?.specialization
            }
          </p>

          <span>
            {user.email}
          </span>

          <div className="doctor-badges">

            <div className="badge">
              Experience:
              {" "}
              {
                user
                  .doctorDetails
                  ?.experience
              }
              {" "}
              Years
            </div>

            <div className="badge">
              ₹
              {
                user
                  .doctorDetails
                  ?.consultationFee
              }
              {" "}
              / Visit
            </div>

          </div>

        </div>

      </div>

      {/* FORM */}

      <form
        className="profile-form"
        onSubmit={handleSubmit}
      >

        <div className="form-grid">

          <div className="input-group">
            <label>
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={
                formData.fullName
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Email
            </label>

            <input
              type="email"
              value={
                formData.email
              }
              disabled
            />
          </div>

          <div className="input-group">
            <label>
              Mobile Number
            </label>

            <input
              type="text"
              name="mobileNumber"
              value={
                formData.mobileNumber
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Address
            </label>

            <input
              type="text"
              name="address"
              value={
                formData.address
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Department
            </label>

            <input
              type="text"
              name="department"
              value={
                formData.department
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Specialization
            </label>

            <input
              type="text"
              name="specialization"
              value={
                formData.specialization
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Qualification
            </label>

            <input
              type="text"
              name="qualification"
              value={
                formData.qualification
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Experience
            </label>

            <input
              type="number"
              name="experience"
              value={
                formData.experience
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="input-group">
            <label>
              Consultation Fee
            </label>

            <input
              type="number"
              name="consultationFee"
              value={
                formData.consultationFee
              }
              onChange={
                handleChange
              }
            />
          </div>

        </div>

        <div className="input-group">
          <label>
            About Doctor
          </label>

          <textarea
            rows="5"
            name="about"
            value={
              formData.about
            }
            onChange={
              handleChange
            }
          />
        </div>

        <button
          type="submit"
          className="save-btn"
          disabled={loading}
        >
          {loading
            ? "Updating..."
            : "Save Changes"}
        </button>

      </form>

    </div>
  );
}

export default Profile;