import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import token from "@/src/libs/token/token";
import {
  NoticeCheckResponse,
  NoticeListResponse,
} from "@/src/types/Notice/notice.type";

class NotificationApi {
  public async getNoticeCheckApi(): Promise<NoticeCheckResponse | void> {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await MenToMenAxios.get("/notice/check");
      return data;
    }
    return;
  }

  public async getNoticeListApi(): Promise<NoticeListResponse> {
    const { data } = await MenToMenAxios.get("/notice/list");
    return data;
  }
}

export default new NotificationApi();
