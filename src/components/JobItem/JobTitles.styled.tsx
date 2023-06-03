import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 15px;
  justify-content: center;
  @media screen and (min-width: 758px) {
    margin-bottom: 0;
  }
  .features {
    display: flex;
    align-items: center;
    margin-top: -20px;
    @media screen and (min-width: 758px) {
      margin-top: 0;
    }
  }
  .company {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 12px;
    color: #5ca5a5;
    margin-right: 33px;
  }
  .new {
    width: 51px;
    background: #5ca5a5;
    margin-right: 8px;
  }
  .new,
  .featured {
    height: 24px;
    border-radius: 12px;
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.107692px;
    text-transform: uppercase;
    color: #ffffff;
    padding-top: 6px;
  }
  .featured {
    width: 79px;
    background: #2b3939;
    border-radius: 12px;
  }
  .position {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    color: #2b3939;
    &:hover {
      color: #5ca5a5;
    }
  }
  .extra {
    display: flex;
    gap: 16px;
    p {
      display: inline-block;
      font-family: "League Spartan";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.123077px;
      color: #7c8f8f;
    }
  }
`;
