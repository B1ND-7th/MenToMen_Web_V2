import CONFIG from "../../config/config.json";
import { UserResponse } from "../../interface/user/user.type";
import { customAxios } from "../../lib/axios/customAxios";

class UserRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await customAxios.get(`/user/my`);
    return data;
  }
}

export default new UserRepository();
