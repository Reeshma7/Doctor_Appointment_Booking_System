import { useState } from "react";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./DoctorSidebar";
import DoctorHeader from "./DoctorHeader";
import "./DoctorLayout.css";

function DoctorLayout() {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="doctor-layout">
      <DoctorSidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="doctor-main">
        <DoctorHeader
          setOpen={setOpen}
        />

        <div className="doctor-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DoctorLayout;