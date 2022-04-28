import styled from "styled-components";

export const LunImageWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  width: 100%;
  margin: 0;

  .wrapper-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 8px;

    .lun-img-by-date {
      display: flex; 
      justify-content: center; align-items: center;
      width: 4rem; height: 4rem;
      border-radius: 50%;
      box-shadow: 15px -17px 20px #adacaa;
      background-color: #fff; 
      font-size: 4rem; 
    }
    .direction {
      width: 100%; 
      display: flex; 
      justify-content: space-around;
    }
    .horizon {
      width: 100%;
      margin: 0; 
      border: 0.5px solid black;
    }
  }
`;

export const MoonDirection = styled.div`
  width: 60%;
  height: ${({ height }) => height || 'auto'};
  margin-top: 10px;
  display: flex;
  justify-content: ${ ({ justifyContent }) => justifyContent || 'center' };
  align-items: ${ ({ alignItems }) => alignItems || 'flex-start' };
`;