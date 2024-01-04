import { useRecoilState, useRecoilValue } from "recoil";
import { useComment } from "@/hooks/Comment/useComment";
import { useGetCommentQuery } from "@/queries/Comment/comment.query";
import { UserIdAtom } from "@/stores/User/user.store";
import { StudentInfo } from "../../../Common/StudentInfo";
import * as S from "./style";
import profile from "@/assets/icons/user/aprofile.png";
import closeComment from "@/assets/icons/comment/closeComment.svg";
import editComment from "@/assets/icons/comment/editComment.svg";
import { IsEditCommentAtom } from "@/stores/Comment/comment.store";
import Image from "next/image";

const DetailCommentList = ({ postId }: { postId: number }) => {
  const { data: comments } = useGetCommentQuery(postId, { suspense: true });

  const {
    handleDeleteComment,
    handleEditComment,
    handleCommentChange,
    setContent,
    content,
  } = useComment();

  const userId = useRecoilValue(UserIdAtom);
  const [isEditComment, setIsEditComment] = useRecoilState(IsEditCommentAtom);

  return (
    <>
      {comments?.data.length!! > 0 &&
        comments?.data.map((item) => (
          <li key={item.commentId}>
            <S.UserProfileWrap>
              <S.UserProfile>
                <Image
                  width={35}
                  height={35}
                  src={item.profileUrl || profile}
                  style={S.ProfileImage}
                  alt="이미지 없음"
                />
                <S.ProfileWrap>
                  <StudentInfo
                    stdInfo={item.stdInfo}
                    userName={item.userName}
                  />
                  {userId === item.userId && (
                    <S.CommentEditAndDel>
                      <p
                        onClick={() => {
                          setIsEditComment((prev) => ({
                            ...prev,
                            isEdit: true,
                            commentId: item.commentId,
                          }));
                          setContent(item.content);
                        }}
                      >
                        수정
                      </p>
                      /
                      <p
                        onClick={() =>
                          handleDeleteComment(item.commentId, item.postId)
                        }
                      >
                        삭제
                      </p>
                    </S.CommentEditAndDel>
                  )}
                </S.ProfileWrap>
              </S.UserProfile>
            </S.UserProfileWrap>
            {isEditComment.isEdit &&
            item.commentId === isEditComment.commentId ? (
              <S.CommentEditContainer>
                <textarea value={content} onChange={handleCommentChange} />

                <S.DelAndEditContainer>
                  <S.DelAndEditIcon
                    src={closeComment}
                    onClick={() =>
                      setIsEditComment((prev) => ({ ...prev, isEdit: false }))
                    }
                    alt="이미지 없음"
                  />
                  <S.DelAndEditIcon
                    src={editComment}
                    onClick={() =>
                      handleEditComment(
                        item.commentId,
                        item.postId,
                        item.content,
                        setIsEditComment
                      )
                    }
                    alt="이미지 없음"
                  />
                </S.DelAndEditContainer>
              </S.CommentEditContainer>
            ) : (
              <S.CommentText>{item.content}</S.CommentText>
            )}
          </li>
        ))}
    </>
  );
};

export default DetailCommentList;