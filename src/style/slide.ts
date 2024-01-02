import Slider from "react-slick";
import styled from "styled-components";
import { palette } from "./palette";

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledSlider = styled(Slider)<{ cursorSize?: string }>`
  .slick-track {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .slick-prev {
    z-index: 1;
    left: 10px;
  }
  .slick-next {
    right: 15px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: ${({ cursorSize }) => cursorSize || "25px"};
    color: #ddd;
    transition: all 0.3s ease-in-out;
  }

  .slick-prev:active,
  .slick-next:active {
    &:before {
      color: ${palette.color};
    }
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: #ddd;

    li button:before {
      color: #ddd;
    }

    li.slick-active button:before {
      color: #ddd;
    }
  }
`;

export const ItemImage = styled.img<{ cursor?: string }>`
  width: 100%;
  height: 100%;

  cursor: ${({ cursor }) => cursor};
`;