import { apiService } from "../../../../config/apiService";
import { IRegister, ILoginForm, ApiResponse } from "./Auth.interface";

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
        return response.data;
      });
  },
};
