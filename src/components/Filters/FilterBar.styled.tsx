import styled from "styled-components";

export const StyledFilters = styled.div`
  width: 100%;
  margin-top: -40px;

  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .tags {
    flex-wrap: wrap;
    display: flex;
    gap: 16px;
  }
  .clear {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.123077px;
    color: #7c8f8f;
    cursor: pointer;
  }
`;

export const StyledTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  height: 32px;
  p {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.123077px;
    color: #5ca5a5;
  }
  .tag {
    background: #f0f6f6;
    mix-blend-mode: normal;
    cursor: pointer;
    border-radius: 4px;
    padding: 5px 8px;
    &:hover {
      background-color: #5ca5a5;
      p {
        color: white;
      }
    }
  }
  .close {
    background-color: #5ca5a5;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #2b3939;
    }
  }
`;
