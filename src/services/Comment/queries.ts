import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import CommentApi from "./CommentApi";
import { CommentDataType, QUERY_KEYS } from "@/src/stories/core";

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
