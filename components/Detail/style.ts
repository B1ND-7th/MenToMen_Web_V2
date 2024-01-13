import flex from "@/style/flex";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  heigth: 100%;
  padding-top: 3rem;
  padding-left: calc(266px + 6rem);
`;

export const Wrapper = styled.div`
  width: 75%;
  height: auto;

  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

export const PostBox = styled.div`
  width: 100%;
  min-width: 800px;

  height: auto;
  min-height: 200px;

  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 25px 30px 15px;
  background-color: #fff;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: auto;
  padding-left: 45px;

  ${flex({ flexDirection: "column", rowGap: "10px" })}
`;

export const Content = styled.div`
  width: 100%;
  height: auto;

  white-space: pre-wrap;
  line-height: 23px;
  font-size: 18px;
`;
