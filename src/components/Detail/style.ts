import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  heigth: 100%;

  ${Flex({
    justifyContent: "center",
  })}
`;

export const Wrapper = styled.div`
  width: 95%;
`;

export const DetailItemContainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  ${Flex({ flexDirection: "column", alignItems: "center", rowGap: "15px" })}
`;

export const PostArticle = styled.article`
  width: 100%;
  min-height: 130px;

  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 16px 16px 10px 16px;

  background-color: #fff;
  display: flex;
`;

export const ProfileImage = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const PostWrap = styled.div`
  width: calc(100% - 45px);
  padding-left: 18px;
  ${Flex({ flexDirection: "column" })}
`;

export const PostContent = styled.div`
  width: 97%;
  padding-right: 23px;
  ${Flex({ flexDirection: "column", rowGap: "4px" })}
`;

export const IconContainer = styled.div`
  width: 100%;
  padding-top: 8px;

  ${Flex({
    alignItems: "center",
    // justifyContent: "flex-end",
    columnGap: "5px",
  })}
`;

export const InteractionStyle = {
  width: "23px",
  height: "23px",
};

export const NoneCommentDataText = styled.div`
  width: 100%;
  height: 300px;
  color: gray;
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
