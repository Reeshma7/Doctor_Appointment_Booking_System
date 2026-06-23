const user = await User.create({
  fullName,
  email,
  mobileNumber,
  gender,
  address,
  password: hashedPassword,

  profileImage: req.file
    ? req.file.filename
    : "",
});