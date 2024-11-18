import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../../index.css";
import Sidebar from "./Sidebar/Sidebar";

const localizer = momentLocalizer(moment);

type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

const Schedule: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleAddEvent = (newEvent: CalendarEvent) => {
    setEvents([...events, newEvent]);
    setShowOffcanvas(false);
  };
  return (
    <div className="calender-container ">
      <div className="btn-container">
        <button
          className="btn-event hover:bg-sky-800"
          onClick={() => {
            setSelectedEvent(null);
            toggleOffcanvas();
          }}
        >
          Add Events
        </button>
        <Sidebar
          show={showOffcanvas}
          onHide={toggleOffcanvas}
          onAddEvent={handleAddEvent}
          selectedEvent={selectedEvent}
        />
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Schedule;
