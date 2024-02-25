import flex from "@/src/styles/flex";
import styled, { CSSObject } from "styled-components";

export const ContentBox = styled.div`
  width: 100%;
  padding: 6px 0 10px 0;
  ${flex({ flexDirection: "column", rowGap: "6px" })}
`;

export const ContentText = styled.div<{
  isShowMoreContent: boolean;
  maxHeight: number;
  customstyle?: CSSObject;
}>`
  max-height: ${({ isShowMoreContent, maxHeight }) =>
    isShowMoreContent ? "auto" : `${maxHeight}px`};
  overflow: hidden;
  font-size: 14.5px;
  line-height: 18px;

  p {
    width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }

  ${({ customstyle }) => customstyle};
`;

export const ShowMoreText = styled.p<{ isShowMoreContent: boolean }>`
  width: ${({ isShowMoreContent }) => (isShowMoreContent ? "80px" : "55px")};

  cursor: pointer;
  color: #64748b;

  font-size: 14px;
  font-family: "Pretendard-Medium" !important;
`;