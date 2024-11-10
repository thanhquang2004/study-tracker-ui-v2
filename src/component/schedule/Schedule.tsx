import React, { useState } from "react";
import { Card, Typography, DatePicker } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

const events = [
  {
    id: 1,
    title: "My new event",
    start: "2024-11-01 00:00",
    end: "2024-11-01 02:00",
  },
  {
    id: 2,
    title: "Another event",
    start: "2024-11-05 14:00",
    end: "2024-11-05 16:00",
  },
  {
    id: 3,
    title: "Meeting",
    start: "2024-11-15 09:00",
    end: "2024-11-15 10:00",
  },
];

const getEventsForDay = (day: number, month: number, year: number) => {
  return events.filter((event) => {
    const eventDate = new Date(event.start);
    return (
      eventDate.getDate() === day &&
      eventDate.getMonth() === month &&
      eventDate.getFullYear() === year
    );
  });
};

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Ngày tháng năm mặc định là hôm nay

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Tổng số ngày trong tháng đã chọn
  const daysInMonth = selectedDate.daysInMonth();

  // Xử lý khi người dùng chọn ngày tháng năm mới
  const onDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="flex justify-center items-center p-4  min-h-screen">
      <Card className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <div>
          <Title level={2} className="text-center text-pink-500 mb-4">
            My Schedule
          </Title>
          <span className="flex justify-end mb-4">
            <DatePicker
              picker="month"
              onChange={onDateChange}
              defaultValue={selectedDate}
              format="MMMM YYYY"
            />
          </span>
        </div>

        {/* Tiêu đề hàng tuần */}
        <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Hiển thị lịch dạng lưới với các sự kiện */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const dayEvents = getEventsForDay(
              day,
              selectedDate.month(),
              selectedDate.year()
            );

            return (
              <div
                key={index}
                className="border border-gray-300 h-24 flex flex-col items-start p-2 rounded-md hover:bg-pink-50"
              >
                <div className="text-xs font-semibold text-gray-700 mb-1">
                  {day}
                </div>

                {/* Hiển thị các sự kiện trong ô ngày */}
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="text-xs text-pink-500 bg-pink-100 rounded px-1 mt-1"
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Schedule;
