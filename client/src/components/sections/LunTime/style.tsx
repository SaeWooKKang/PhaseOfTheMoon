import styled from "styled-components";

export const LunTimeWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction:column;
  align-items: center;

  .loading-ment {
    width: 80%;
    display: flex; 
    justify-content: center;
  }
  .cnt-rise-transit-set {
    width: 100%;
    display: flex; 
    justify-content: center;
    /* margin-top: 1.3rem; */
    .cnt-items-rise-transit-set {
      display: flex; 
      width: 100%;
      justify-content: center;

    }
  }
  .ment {
      background-color: #577CE9;
      padding: 4px 8px; 
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-radius: 4px;
      color: #fff;
      font-size: 0.8rem;
    }
`;

export const CycleWrapper = styled.div<{ flexDirection: boolean }>`
  width: 80%;
  display:flex;
  align-items: center;
  font-size: 0.8rem;
  flex-direction: ${(props) => props.flexDirection ? 'row' : `column`};
  justify-content: ${props => props.flexDirection ? 'space-between': 'center' };

  .item-rise-transit-set {
    justify-content: center;
    display: flex;
  }
`;
