import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      mobileNumber: "",
      specialization: "",
      experience: "",
      consultationFee: "",
      qualification: "",
      department: "",
      about: "",
    });

  const fetchDoctor = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/doctors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const doctor = res.data.doctor;

      setFormData({
        fullName: doctor.fullName,
        email: doctor.email,
        mobileNumber:
          doctor.mobileNumber,

        specialization:
          doctor.doctorDetails
            ?.specialization || "",

        experience:
          doctor.doctorDetails
            ?.experience || "",

        consultationFee:
          doctor.doctorDetails
            ?.consultationFee || "",

        qualification:
          doctor.doctorDetails
            ?.qualification || "",

        department:
          doctor.doctorDetails
            ?.department || "",

        about:
          doctor.doctorDetails
            ?.about || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

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
      const token =
        localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/doctors/${id}`,
        {
          fullName:
            formData.fullName,

          email:
            formData.email,

          mobileNumber:
            formData.mobileNumber,

          doctorDetails: {
            specialization:
              formData.specialization,

            experience:
              formData.experience,

            consultationFee:
              formData.consultationFee,

            qualification:
              formData.qualification,

            department:
              formData.department,

            about:
              formData.about,
          },
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Doctor Updated Successfully"
      );

      navigate("/admin/doctors");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-doctor">
      <h2>Edit Doctor</h2>

      <form onSubmit={handleSubmit}>
        <div className="doctor-form">

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Doctor Name"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
          />

          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
          />

          <input
            name="specialization"
            value={
              formData.specialization
            }
            onChange={handleChange}
            placeholder="Specialization"
          />

          <input
            name="experience"
            value={
              formData.experience
            }
            onChange={handleChange}
            placeholder="Experience"
          />

          <input
            name="consultationFee"
            value={
              formData.consultationFee
            }
            onChange={handleChange}
            placeholder="Fee"
          />

          <input
            name="qualification"
            value={
              formData.qualification
            }
            onChange={handleChange}
            placeholder="Qualification"
          />

          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About Doctor"
          />

        </div>

        <button type="submit">
          Update Doctor
        </button>
      </form>
    </div>
  );
}

export default EditDoctor;