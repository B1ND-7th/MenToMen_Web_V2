import { CustomLink } from "@/style/common.style";
import { AiOutlineComment } from "react-icons/ai";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

const CommentInteraction = ({ postId, customStyle }: PostInteractionProps) => {
  return (
    <CustomLink href={`/detail/${postId}`}>
      <CommentIcon customStyle={customStyle!} />
    </CustomLink>
  );
};

export default CommentInteraction;

const CommentIcon = styled(AiOutlineComment)<{ customStyle: CSSObject }>`
  ${S.HoverAnimation}
  ${({ customStyle }) => customStyle}
`;