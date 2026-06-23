import User from "../models/User.js";


export const createDoctor = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      mobileNumber,
      gender,
      address,
      specialization,
      experience,
      consultationFee,
      qualification,
      department,
      about,
    } = req.body;

    const existingDoctor =
      await User.findOne({ email });

    if (existingDoctor) {
      return res.status(400).json({
        message: "Doctor already exists",
      });
    }

    const doctor = await User.create({
      fullName,
      email,
      password,
      mobileNumber,
      gender,
      address,

      role: "doctor",

      profileImage: req.file
        ? req.file.filename
        : "",

      doctorDetails: {
        specialization,
        experience,
        consultationFee,
        qualification,
        department,
        about,
      },
    });

    res.status(201).json({
      success: true,
      message: "Doctor Created Successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getDoctors = async (req, res) => {
  try {
    const doctors = await User.find({
      role: "doctor",
    });

    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getDoctorById = async (
  req,
  res
) => {
  try {
    const doctor = await User.findById(
      req.params.id
    );

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const updateDoctor = async (
  req,
  res
) => {
  try {
    const doctor =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const deleteDoctor = async (
  req,
  res
) => {
  try {
    await User.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Doctor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};