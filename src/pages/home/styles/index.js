import styled from "styled-components";
import profileIcon from "../../../assets/images/account_circle.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100%;
`;

export const WhiteContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background: #ffffff;
  width: 35%;
  padding: 20px 40px;

  > div {
    padding-top: 40px;

    img {
      margin-bottom: 40px;
    }

    h2 {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 8px;
      color: #000000;
    }

    form {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      label {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #7e7e7e;
        margin-bottom: 24px;
      }

      input {
        width: 320px;
        height: 38px;

        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background: url(${profileIcon}) no-repeat;
        background-position: 10px 8px;
        padding: 12px 14px 12px 40px;
        margin-bottom: 40px;
        transition: all 0.4s;

        :focus {
          box-shadow: 2px 3px 7px #d5d5d5;
        }
      }

      button {
        width: 320px;
        height: 36px;

        background: #000000;
        border-radius: 100px;
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.4s;
        border: 1px solid transparent;

        :hover,
        :focus {
          color: #000000;
          background-color: #ffffff;
          border: 1px solid #000000;
        }
      }
    }
  }

  footer {
    width: 100%;
    text-align: center;

    p {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      color: #7e7e7e;

      a {
        color: #7e7e7e;
        text-decoration: underline;
      }
    }
  }
`;

export const BlackContainer = styled.div`
  display: flex;
  background: #000000;
  width: 65%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 40px;

  img {
    width: 50%;
    min-width: 300px;
    max-width: 629px;
    margin-bottom: 40px;
  }

  h1 {
    color: #ffffff;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
  }
`;
