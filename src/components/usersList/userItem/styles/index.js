import styled, { keyframes, css } from "styled-components";

const deleting = keyframes`
from{
  /* height: 135px; */
  /* width: 100%; */
  transform: scale(1);
}
to{
  /* height: 0; */
  /* width: 0; */
  transform: scale(0);
}
`;

export const Container = styled.li`
  width: 100%;
  height: 135px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 7px auto;
  padding: 16px 40px 16px 20px;

  animation: ${deleting} 0.5s linear;
  animation-play-state: ${(props) => props.animationState};
  animation-fill-mode: forwards;
`;

export const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8e8e8;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.5s;

    :hover {
      transform: scale(1.2) rotateZ(360deg);
    }
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    /* align-items: center;
    justify-content: center; */

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 15px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #000000;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
          margin-right: 10px;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 30px;
        }
      }

      strong {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin-top: 10px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 16px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 8px;

      a {
        color: #e5e5e5;
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }
`;
