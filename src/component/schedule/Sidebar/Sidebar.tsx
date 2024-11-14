import React from "react";

type SidebarProps = {
  show: boolean;
  onHide: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ show, onHide }) => {
  return (
    <div
      className={`fixed top-[65px]  w-[250px]  h-full bg-slate-200 transition-all duration-300 ease z-[1000] ${
        show ? "left-0" : "-left-[250px]"
      }`}
    >
      <div className="h-full p-5">
        <div className="flex justify-between items-center mb-5 font-bold">
          <h3>Add Events</h3>
          <button
            className="bg-red-600 border-none cursor-pointer text-cyan-50 rounded-xl"
            onClick={onHide}
          >
            Close
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-60%)] ">
          <label className="block mb-2">Title</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="text"
            placeholder="Event Title"
          />

          <label className="block mb-2">Date</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="date"
            placeholder="Event Title"
          />

          <label className="block mb-2">Start Time</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="time"
            placeholder="Event Title"
          />

          <label className="block mb-2">End time</label>
          <input
            className="w-full p-2 border border-[#ccc] rounded-lg "
            type="time"
            placeholder="Event Title"
          />
          <button className="mt-4 p-2 bg-custom-blue border-none cursor-pointer text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
