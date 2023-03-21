import styled from "styled-components";

export const MyPageModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const MyPageModalLayOut = styled.div`
  width: 300px;
  height: 100px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  display:flex;
  flex-direction:column;
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MyPageDeleteContainer = styled.div`
  padding-top:15px;
`;

export const MyPageDelete = styled.div`
  cursor: pointer;
  font-size:20px;
`;

export const MyPageModalLine = styled.div`
  border-top:1px solid gray;
  margin-top:15px;
`;

export const MyPageModifyContainer = styled.div`
  padding-top:15px;
`;

export const MyPageModify = styled.div`
  cursor:pointer;
  font-size:20px;
`;