import { useState } from "react";
import axios from "axios";
import "./AddDoctor.css";

function AddDoctor() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "",
    address: "",
    department: "",
    specialization: "",
    experience: "",
    consultationFee: "",
    qualification: "",
    about: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setProfileImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      data.append("profileImage", profileImage);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/doctors/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Doctor Created Successfully");
    } catch (error) {
      console.log(error.response?.data);
console.log(error);

alert(
  error.response?.data?.message ||
  "Failed to Create Doctor"
);
    }
  };

  return (
    <div className="add-doctor">
      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit}>
        <div className="doctor-form">

          <input
            type="text"
            name="fullName"
            placeholder="Doctor Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            required
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="consultationFee"
            placeholder="Consultation Fee"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />

          <textarea
            name="about"
            placeholder="About Doctor"
            onChange={handleChange}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="preview-image"
            />
          )}
        </div>

        <button type="submit">
          Create Doctor
        </button>
      </form>
    </div>
  );
}

export default AddDoctor;