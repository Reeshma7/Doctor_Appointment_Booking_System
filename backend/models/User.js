import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
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

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    
    role: {
      type: String,
      enum: ["patient", "doctor", "admin"],
      default: "patient",
    },
    doctorDetails: {
  specialization: {
    type: String,
    default: "",
  },

  experience: {
    type: Number,
    default: 0,
  },

  consultationFee: {
    type: Number,
    default: 0,
  },

  qualification: {
    type: String,
    default: "",
  },

  department: {
    type: String,
    default: "",
  },

  about: {
    type: String,
    default: "",
  },
},
  },
  { timestamps: true }
);


userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      role: this.role, 
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export default mongoose.model("User", userSchema);