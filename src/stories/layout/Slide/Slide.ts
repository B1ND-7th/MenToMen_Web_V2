import Slider from "react-slick";
import styled from "styled-components";
import { Flex } from "../Flex";

export const SlideWrapper = styled.div`
  width: 100%;
`;

export const StyledSlider = styled(Slider)<{
  arrowSize?: string;
}>`
  .slick-track {
    ${Flex({ alignItems: "center", justifyContent: "center" })};
  }

  .slick-prev {
    z-index: 1;
    left: 8px !important;
  }
  .slick-next {
    right: 13px !important;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: ${({ arrowSize }) => arrowSize || "25px"};
    color: #ddd;
    transition: all 0.3s ease-in-out;
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
