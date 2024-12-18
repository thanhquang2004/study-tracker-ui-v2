import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "../../index.css";
import Sidebar from "./Sidebar/Sidebar";
import ScheduleApi from "../apis/AUsers/Schedule/Schedule.api";
import { IEvent } from "../apis/AUsers/Schedule/Schedule.interface";
const localizer = momentLocalizer(moment);

const Schedule: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  const getSchedule = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }
    try {
      console.log(userId);
      const response = await ScheduleApi.getScheduleById(userId);
      console.log("API Response:", response);

      const formattedEvents = response.map((event: IEvent) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
      console.log("Formatted Events:", formattedEvents);

      setEvents([...formattedEvents]);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    const userId = localStorage.getItem("userId");
    if (userId) {
      getSchedule();
    }
  }, []);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const eventStyleGetter = (event: IEvent) => {
    const backgroundColor = event.color || "#FF1";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
      },
    };
  };

  const handleSelectEvent = (event: IEvent) => {
    setSelectedEvent(event);
    setShowOffcanvas(true);
  };

  return (
    <div className="calender-container ">
      <div className="btn-container">
        <button
          className="btn-event hover:bg-sky-800"
          onClick={() => {
            const userId = localStorage.getItem("userId");

            if (!userId) {
              alert("Hãy đăng nhập để sử dụng chức năng này.");
              return;
            }
            setSelectedEvent(null);
            toggleOffcanvas();
          }}
        >
          Add Events
        </button>
        <Sidebar
          show={showOffcanvas}
          onHide={toggleOffcanvas}
          selectedEvent={selectedEvent}
          refreshEvent={getSchedule}
        />
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh" }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default Schedule;
