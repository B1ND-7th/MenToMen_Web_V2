import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideOptions } from "@/constants/Slide/slide.constant";
import { ItemImage, SlideWrapper, StyledSlider } from "@/style/slide";
import getTag from "@/util/Tag/getTag";

interface Props {
  imgUrls: string[];
  tag: string;
}

const ListItemImages = ({ imgUrls, tag }: Props) => {
  return (
    <S.ImageContainer sizeOfImages={imgUrls?.length}>
      <S.TagIcon src={getTag.getTagIcon(tag)} alt="이미지 없음" />
      <SlideWrapper>
        <StyledSlider {...slideOptions}>
          {imgUrls.map((item, idx) => (
            <ItemImage key={idx} src={item} alt="" />
          ))}
        </StyledSlider>
      </SlideWrapper>
    </S.ImageContainer>
  );
};

export default ListItemImages;
