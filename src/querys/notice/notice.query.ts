import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import NoticeRepository from "../../repository/notice/notice.repository";
import { NoticeListResponse } from "../../types/notice/notice.type";

export const useGetNoticeCheck = () =>
  useQuery("notice/check", () => NoticeRepository.getNoticeCheck());

export const useGetNoticeList = (
  options?:UseQueryOptions<
    NoticeListResponse,
    AxiosError,
    NoticeListResponse,
    "notice/list"
  >
  ):UseQueryResult<NoticeListResponse,AxiosError> =>
  useQuery("notice/list", () => NoticeRepository.getNoticeList(),{
    ...options,
  });
