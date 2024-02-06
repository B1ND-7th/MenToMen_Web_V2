import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { CommentDataType } from "@/src/types/Comment/comment.type";
import CommentApi from "./api";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";

export const useGetCommentQuery = (
  postId: number,
  options?: UseQueryOptions<
    CommentDataType,
    AxiosError,
    CommentDataType,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.Comment.getComment(postId),
    () => CommentApi.getCommentApi(postId),
    {
      enabled: !!postId,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      ...options,
    }
  );
