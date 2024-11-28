import React, { useEffect, useState } from "react";
import { IEvent } from "../../apis/AUsers/Schedule/Schedule.interface";
import ScheduleApi from "../../apis/AUsers/Schedule/Schedule.api";

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
  refreshEvent: () => void;
};

const initialFormState = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  category: "",
  roadmapId: "",
  color: PASTEL_COLORS[0],
};

const Sidebar: React.FC<SidebarProps> = ({
  show,
  onHide,
  selectedEvent,
  refreshEvent,
}) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        title: selectedEvent.title,
        description: selectedEvent.description,
        startDate: new Date(selectedEvent.start).toISOString().split("T")[0],
        endDate: new Date(selectedEvent.end).toISOString().split("T")[0],
        category: selectedEvent.category,
        roadmapId: selectedEvent.roadmapId,
        color: selectedEvent.color,
      });
    } else {
      setFormData(initialFormState);
    }
  }, [selectedEvent]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const validColor = PASTEL_COLORS.includes(formData.color)
      ? formData.color
      : PASTEL_COLORS[0];

    const eventData: IEvent = {
      id: selectedEvent ? selectedEvent.id : "",
      userId,
      ...formData,
      start: formData.startDate,
      end: formData.endDate,
      allDay: true,
      type: "default",
      status: "active",
      color: validColor,
    };

    if (isLoading) return;
    setIsLoading(true);
    try {
      if (selectedEvent?.id !== undefined) {
        await ScheduleApi.updateSchedule(selectedEvent.id, eventData);
      } else {
        await ScheduleApi.createSchedule(eventData);
      }

      refreshEvent();
      onHide();
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error creating/updating event:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedEvent) {
      console.error("No event selected to delete");
      return;
    }
    if (window.confirm("Bạn có chắc muốn xóa sự kiện này không?")) {
      try {
        await ScheduleApi.deleteSchedule(selectedEvent.id!);
        console.log("Event deleted successfully");
        refreshEvent();
        onHide();
      } catch (error) {
        console.error("Error deleting event:", error);
      }
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
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={formData.description}
              name="description"
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
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
                    formData.color === colorOption
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: colorOption }}
                  onClick={() =>
                    handleChange({
                      target: { name: "color", value: colorOption },
                    } as React.ChangeEvent<HTMLInputElement>)
                  }
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg flex-1"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : selectedEvent ? "Update" : "Submit"}
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
