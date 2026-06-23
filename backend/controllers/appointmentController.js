import Appointment from "../models/Appointment.js";

export const bookAppointment =
  async (req, res) => {
    try {
      const {
        doctorId,
        appointmentDate,
        appointmentTime,
        reason,
      } = req.body;

      const appointment =
        await Appointment.create({
          patientId: req.user._id,
          doctorId,
          appointmentDate,
          appointmentTime,
          reason,
        });

      res.status(201).json({
        success: true,
        message:
          "Appointment Booked",
        appointment,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };