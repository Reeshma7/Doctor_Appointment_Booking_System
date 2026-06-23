import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mobileNumber", formData.mobileNumber);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("password", formData.password);

      if (profileImage) {
        formDataToSend.append("profileImage", profileImage);
      }

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // OPTIONAL (store user temporarily if you want)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Registration Successful");

      // IMPORTANT: go to login page (correct flow)
      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="container">
      <div className="box">

        <h2>Register</h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfileImage(e.target.files[0])}
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobileNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <textarea
          name="address"
          placeholder="Address"
          rows="3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;