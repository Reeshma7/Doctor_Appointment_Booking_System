import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import PatientLayout from "./layouts/PatientLayout";
import AdminLayout from "./layouts/AdminLayout";

import PatientDashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorLayout from "./layouts/DoctorLayout";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Profile from "./pages/doctor/Profile";
import AddDoctor from "./pages/admin/AddDoctor";
import DoctorList from "./pages/admin/DoctorList";
import EditDoctor from "./pages/admin/EditDoctor";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= PATIENT ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roleRequired="patient">
              <PatientLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientDashboard />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roleRequired="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="doctors"
            element={<DoctorList />}
          />

          <Route
            path="doctors/add"
            element={<AddDoctor />}
          />
           <Route
    path="doctors/edit/:id"
    element={<EditDoctor />}
  />
        </Route>
        <Route
  path="/doctor"
  element={
    <ProtectedRoute roleRequired="doctor">
      <DoctorLayout />
    </ProtectedRoute>
  }
>
  <Route
    path="dashboard"
    element={<DoctorDashboard />}
  />
  <Route
  path="profile"
  element={<Profile />}
/>
</Route>

        {/* 404 */}
        <Route
          path="*"
          element={<h1>404 NOT FOUND</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;