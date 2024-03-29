import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";
import token from "@/src/libs/token/token";
import { useRouter } from "next/router";
import { MenToMenToast } from "../../stories/utils";

export function useLogout() {
  const router = useRouter();

  const handleLogoutClick = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer === true) {
      token.removeCookie(ACCESS_TOKEN_KEY);
      token.removeCookie(REFRESH_TOKEN_KEY);

      MenToMenToast.showSuccess("로그아웃 되었습니다!");
      router.push("/");
    }
  };

  return { handleLogoutClick };
}
