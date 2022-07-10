import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #e5e5e5;
  padding: 16px 70px 18px 50px;
`;

export const ContainerUsers = styled.div`
  max-height: 500px;
  width: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 100px;
    background: #f0f0f0;
  }

  ::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 100px;
  }
`;
