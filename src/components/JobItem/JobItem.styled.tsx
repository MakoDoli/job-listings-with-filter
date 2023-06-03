import styled from "styled-components";

export const Item = styled.div`
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 5px solid #5ca5a5;
  padding: 0 20px 15px 20px;
  margin-top: 40px;
  @media screen and (min-width: 758px) {
    flex-direction: row;
    align-items: center;
    padding: 32px 20px;
  }
  img {
    width: 48px;
    height: 48px;
    transform: translateY(-50%);
    @media screen and (min-width: 758px) {
      transform: translateY(0);
      margin-right: 24px;
      width: 88px;
      height: 88px;
    }
  }
  .job {
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 758px) {
      flex-direction: row;
      border: none;
      align-items: center;
    }
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    padding-top: 16px;
    gap: 16px;
  }
  .tags {
    flex-wrap: wrap;
    display: flex;
    gap: 16px;
  }
`;
