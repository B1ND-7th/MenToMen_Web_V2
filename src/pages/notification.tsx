import Notification from "@/components/Notification";
import { QUERY_KEYS } from "@/queries/queryKey";
import noticeRepository from "@/repositories/Notice/notice.repository";
import Head from "next/head";
import React from "react";
import { dehydrate, QueryClient } from "react-query";

const NotificationPage = () => {
  return (
    <>
      <Head>
        <title>멘투멘 | 알림 페이지</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Notification />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(
      QUERY_KEYS.Notice.getNoticeList,
      noticeRepository.getNoticeList
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NotificationPage;