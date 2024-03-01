import profile from "@/public/icons/user/aprofile.png";
import * as S from "../style";
import { useRouter } from "next/router";
import { NoneDataText } from "@/src/stories/styles";
import { useGetNoticeListQuery } from "@/src/services/Notification/queries";
import { GetDateTime, GetText } from "@/src/stories/utils";

const NotificationItem = () => {
  const { data: noticeList } = useGetNoticeListQuery({ suspense: true });
  const router = useRouter();

  return (
    <>
      {noticeList?.data.length! > 0 ? (
        noticeList?.data.map((item, idx) => (
          <S.NoticeItemBox key={idx}>
            <S.ProfileImage
              src={item.senderProfileImage || profile}
              width={50}
              height={50}
              alt="프로필"
            />

            <S.NoticeContent
              onClick={() => router.push(`/detail/${item.postId}`)}
            >
              <S.SenderWrap>
                <S.SenderMessage>
                  <span>{item.senderName}</span> 님이 회원님의 게시글에 댓글을
                  남겼습니다.
                </S.SenderMessage>
              </S.SenderWrap>

              <S.SenderComment>
                {new GetText(item.commentContent).stringEllipsis(135)}
              </S.SenderComment>

              <S.CommentUpdateDate>
                {new GetDateTime().uploadTimeAgo(new Date(item.createDateTime))}
              </S.CommentUpdateDate>
            </S.NoticeContent>
          </S.NoticeItemBox>
        ))
      ) : (
        <NoneDataText>알림이 없습니다.</NoneDataText>
      )}
    </>
  );
};

export default NotificationItem;
