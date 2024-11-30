import { apiService } from "../../../../config/apiService";
import {
  IRegister,
  ILoginForm,
  ApiResponse,
  IUser,
  IUserResponse,
} from "./Auth.interface";

export default {
  userRegister(data: IRegister): Promise<{ message: string }> {
    return apiService
      .post("/identity/users/registration", data)

      .then((response) => {
        return response.data;
      });
  },

  userLogin(data: ILoginForm): Promise<ApiResponse> {
    return apiService
      .post("/identity/auth/token", data)

      .then((response) => {
        console.log("Dữ liệu gửi tới API:", data);
        return response.data;
      });
  },

  getUserinfo(): Promise<IUser> {
    return apiService
      .get("/identity/users/my-info")

      .then((response) => {
        console.log("userid:", response.data.result.id);
        return response.data;
      });
  },
  getUserId(userId: string): Promise<IUser> {
    return apiService
      .get(`/profile/users/${userId}`)

      .then((response) => {
        console.log("userprofile:", response.data.result.id);
        return response.data;
      });
  },
  getUser(): Promise<IUserResponse> {
    return apiService.get("/identity/users").then((response) => response.data);
  },

  updateUserActiveStatus(userId: string): Promise<void> {
    return apiService
      .put(`/identity/users/${userId}/deactivate`)

      .then((response) => {
        return response.data;
      });
  },
  deleteSchedule(userId: string): Promise<void> {
    return apiService.delete(`/identity/users/${userId}`).then((response) => {
      console.log("User deleted:", response);
    });
  },
};
