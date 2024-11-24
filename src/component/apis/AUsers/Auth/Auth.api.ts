import { apiService } from "../../../../config/apiService";
import { IRegister, ILoginForm, ApiResponse, IUser } from "./Auth.interface";

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
};
