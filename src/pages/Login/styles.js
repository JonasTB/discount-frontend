import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
`;

export const Banner = styled.header``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 33vw);
  height: 100%;

  h1 {
      font-size: 36px;
      color: #BB81FE;
    }

  /* form {
    z-index: 1;
    margin: 80px 0;
    width: 340px;
    text-align: start;
    animation: ease-in 1s;

    

    p {
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 22px;
      color: #fff;
    }

    span {
      color: #fff;
      font-size: 22px;
      font-weight: 500;
    }
  } */
`;
