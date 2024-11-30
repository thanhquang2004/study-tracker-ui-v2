import { apiService } from "../../../../config/apiService";
import { IEvent } from "./Schedule.interface";

export default {
  getScheduleById(userId: string): Promise<IEvent[]> {
    return apiService
      .get(`/schedules/get-schedules-by/${userId}`)

      .then((response) => {
        return response.data;
      });
  },

  createSchedule(data: IEvent): Promise<IEvent> {
    return apiService
      .post("/schedules/create-schedule", data)
      .then((response) => {
        return response.data.result;
      });
  },
  updateSchedule(id: string, data: IEvent): Promise<IEvent> {
    return apiService.put(`/schedules/${id}`, data).then((response) => {
      console.log("Event updated:", response);
      return response.data;
    });
  },
  deleteSchedule(id: string): Promise<void> {
    return apiService.delete(`/schedules/${id}`).then((response) => {
      console.log("Event deleted:", response);
    });
  },
};
