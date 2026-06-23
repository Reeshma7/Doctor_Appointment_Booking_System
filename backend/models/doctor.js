import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    consultationFee: {
      type: Number,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    about: {
      type: String,
      default: "",
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Doctor",
  doctorSchema
);