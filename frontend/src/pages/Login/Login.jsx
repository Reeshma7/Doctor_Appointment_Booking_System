import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "patient", // Default selection
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email: formData.email,
        password: formData.password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    const role = res.data.user.role;

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "doctor") {
      navigate("/doctor/dashboard");
    } else {
      navigate("/dashboard");
    }

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="login-container">
      <div className="login-window">
        
        {/* LEFT COLUMN: BRANDING & ILLUSTRATION */}
        <div className="brand-side">
          <div className="brand-logo">
            <span className="plus-icon">+</span>
            <div className="logo-text">
              <h1>MediCare</h1>
              <span>Portal</span>
            </div>
          </div>
          <div className="illustration-wrapper">
            <img 
              src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" 
              alt="Medical Staff Illustration" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: SECURE AUTH FORM CONTROLS */}
        <div className="form-side">
          <div className="form-header">
            <h2>Welcome!</h2>
            <p className="subtitle">Login to continue your account</p>
          </div>

          <form onSubmit={handleLogin}>
            {/* ROLE SELECTOR AT THE TOP: Changes form behavior instantly */}
            
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="forgot-password">
              <a href="#forgot">Forgot Password?</a>
            </div>
            <div className="role-selector">
              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  checked={formData.role === "patient"}
                  onChange={handleChange}
                />
                <span className="custom-radio"></span>
                Patient
              </label>

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="doctor"
                  checked={formData.role === "doctor"}
                  onChange={handleChange}
                />
                <span className="custom-radio"></span>
                Doctor
              </label>

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                />
                <span className="custom-radio"></span>
                Admin
              </label>
            </div>


            <button type="submit" className="login-btn">
              Login
            </button>

            {/* DYNAMIC REGISTRATION BLOCK: Only renders if the selected role is 'patient' */}
            {formData.role === "patient" && (
              <>
                <div className="divider-or">
                  <span>or</span>
                </div>
                <Link to="/register" className="register-btn">
                  Register
                </Link>
              </>
            )}
            
          </form>


          <p className="footer-copyright">
            &copy; 2026 MediCare Portal. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;