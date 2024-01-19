import useLockScroll from "@/hooks/common/useLockScroll";
import useEscCloseModal from "@/hooks/Modal/useEscCloseModal";
import { Dispatch, SetStateAction } from "react";
import * as S from "../style";

interface Props {
  imgUrl: string;
  setIsActiveDetailImage: Dispatch<SetStateAction<boolean>>;
}

const DetailImageModal = ({ imgUrl, setIsActiveDetailImage }: Props) => {
  useEscCloseModal(() => setIsActiveDetailImage(false));
  useLockScroll();

  return (
    <S.DetailImageModalContainer onClick={() => setIsActiveDetailImage(false)}>
      <S.CloseIcon size={27} onClick={() => setIsActiveDetailImage(false)} />
      <S.DetailImageModalWrapper onClick={(e) => e.stopPropagation()}>
        <S.DetailImage src={imgUrl} alt="이미지 없음" />
      </S.DetailImageModalWrapper>
    </S.DetailImageModalContainer>
  );
};

export default DetailImageModal;