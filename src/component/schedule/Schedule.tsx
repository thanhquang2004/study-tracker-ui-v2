import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../../index.css";
import Sidebar from "./Sidebar/Sidebar";

const localizer = momentLocalizer(moment);

const Schedule: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div className="calender-container ">
      <div className="btn-container">
        <button
          className="btn-event hover:bg-sky-800"
          onClick={toggleOffcanvas}
        >
          Add Events
        </button>
        <Sidebar show={showOffcanvas} onHide={toggleOffcanvas} />
      </div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Schedule;
