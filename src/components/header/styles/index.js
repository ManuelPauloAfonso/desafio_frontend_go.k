import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};

  width: 100%;
  height: 88px;
  background: #ffffff;
  padding: 16px 90px 18px 58px;

  img {
    width: 138.49px;
    height: 56px;
  }
`;
