import User from "../models/User.js";


export const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobileNumber,
      gender,
      address,
      password,
    } = req.body;

    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    
    const user = await User.create({
  fullName,
  email,
  mobileNumber,
  gender,
  address,
  password,
  profileImage: req.file
    ? req.file.filename
    : "",
});

    const token = user.generateToken();

    res.status(201).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = user.generateToken();

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
  console.log(error);

  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}
};