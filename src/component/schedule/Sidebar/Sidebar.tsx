import moment from "moment";
import React, { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";

type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

type SidebarProps = {
  show: boolean;
  onHide: () => void;
  onAddEvent: (event: {
    id: number;
    title: string;
    start: Date;
    end: Date;
  }) => void;
  selectedEvent: CalendarEvent | null;
};

const Sidebar: React.FC<SidebarProps> = ({
  show,
  onHide,
  onAddEvent,
  selectedEvent,
}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = () => {
    const newEvent = {
      id: Math.random(),
      title,
      start: moment(date)
        .set({
          hour: Number(startTime.split(":")[0]),
          minute: Number(startTime.split(":")[1]),
        })
        .toDate(),
      end: moment(date)
        .set({
          hour: Number(endTime.split(":")[0]),
          minute: Number(endTime.split(":")[1]),
        })
        .toDate(),
    };
    console.log("New Event:", newEvent);
    onAddEvent(newEvent);
    setTitle("");
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div
      className={`fixed top-[65px]  w-[250px]  h-full bg-slate-200 transition-all duration-300 ease z-[1000] ${
        show ? "left-0" : "-left-[250px]"
      }`}
    >
      <div className="h-full p-4">
        <div className="flex justify-between items-center mb-5 font-bold">
          <h3>
            <FaCalendarPlus />
            Add Events
          </h3>
          <button
            className="bg-red-600 border-none cursor-pointer text-cyan-50 rounded-xl"
            onClick={onHide}
          >
            Close
          </button>
        </div>
        <div className="overflow-y-hidden h-[calc(100%-50%)] ">
          <label className="block mb-2">Title</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="block mb-2">Date</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="date"
            placeholder="Event Title"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block mb-2">Start Time</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="time"
            placeholder="Event Title"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label className="block mb-2">End time</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="time"
            placeholder="Event Title"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <button
            className="mt-4 p-2 bg-custom-blue border-none cursor-pointer text-white rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
