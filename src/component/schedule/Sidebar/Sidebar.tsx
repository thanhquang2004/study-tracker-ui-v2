import React, { useEffect, useState } from "react";
import { IEvent } from "../../apis/AUsers/Schedule/Schedule.interface";
import ScheduleApi from "../../apis/AUsers/Schedule/Schedule.api";
import loginApi from "../../apis/AUsers/Auth/Auth.api";

const PASTEL_COLORS = [
  "#F7A8C2",
  "#7FB5C5",
  "#66E06B",
  "#C165B2",
  "#E4D071",
  "#B5B7E6",
];

type SidebarProps = {
  show: boolean;
  onHide: () => void;
  selectedEvent: IEvent | null;
  refreshEvents: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  show,
  onHide,
  selectedEvent,
  refreshEvents,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [roadmapId, setRoadmapId] = useState("");
  const [color, setColor] = useState<string>(PASTEL_COLORS[0]);
  const [userId, setUserId] = useState<string | null>(null);

  const fetchUserInfo = async () => {
    try {
      const userInfo = await loginApi.getUserinfo();
      setUserId(userInfo.result.id);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setDescription(selectedEvent.description);
      setStartDate(new Date(selectedEvent.start).toISOString().split("T")[0]);
      setEndDate(new Date(selectedEvent.end).toISOString().split("T")[0]);
      setCategory(selectedEvent.category);
      setRoadmapId(selectedEvent.roadmapId);
      setColor(selectedEvent.color);
    } else {
      resetForm();
    }
  }, [selectedEvent]);

  const handleSubmit = async () => {
    if (!userId) {
      console.error("User not found, unable to create event");
      return;
    }

    const validColor = PASTEL_COLORS.includes(color) ? color : PASTEL_COLORS[0];
    const newEvent: IEvent = {
      id: selectedEvent
        ? selectedEvent.id
        : Math.floor(Math.random() * 1000000),
      userId: userId,
      title,
      description,
      start: startDate,
      end: endDate,
      allDay: true,
      type: "default",
      status: "active",
      category,
      roadmapId,
      color: validColor,
    };

    try {
      if (selectedEvent) {
        await ScheduleApi.updateSchedule(selectedEvent.id, newEvent);
      } else {
        await ScheduleApi.createSchedule(newEvent);
      }

      refreshEvents();
      onHide();
      resetForm();
    } catch (error) {
      console.error("Error creating/updating event:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setCategory("");
    setRoadmapId("");
    setColor(PASTEL_COLORS[0]);
  };

  const handleDelete = async () => {
    if (!selectedEvent) {
      console.error("No event selected to delete");
      return;
    }

    try {
      await ScheduleApi.deleteCategory(selectedEvent.id);
      console.log("Event deleted successfully");
      refreshEvents();
      onHide();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="mb-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold">
            {selectedEvent ? "Edit Event" : "Add Event"}
          </h3>
          <button className="text-red-500 text-lg" onClick={onHide}>
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Color</label>
            <div className="flex items-center space-x-2">
              {PASTEL_COLORS.map((colorOption) => (
                <div
                  key={colorOption}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    color === colorOption ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: colorOption }}
                  onClick={() => setColor(colorOption)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg flex-1"
            onClick={handleSubmit}
          >
            {selectedEvent ? "Update" : "Submit"}
          </button>
          {selectedEvent && (
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg flex-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
