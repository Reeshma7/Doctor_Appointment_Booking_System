import express from "express";

import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  adminOnly,
  upload.single("profileImage"),
  createDoctor
);

router.get(
  "/all",
  protect,
  adminOnly,
  getDoctors
);

router.get(
  "/:id",
  protect,
  adminOnly,
  getDoctorById
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateDoctor
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteDoctor
);

export default router;