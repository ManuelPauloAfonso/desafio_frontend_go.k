import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};

  width: 100%;
  height: 70px;
  background: #ffffff;
  padding: 16px 90px 18px 58px;

  img {
    width: 138.49px;
    height: 56px;
  }

  a {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;

    width: 180px;
    height: 36px;

    background: #000000;
    border-radius: 100px;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;

    :hover {
      background: transparent;
      color: #000000;
      border: 1px solid #000;
    }
  }
`;
