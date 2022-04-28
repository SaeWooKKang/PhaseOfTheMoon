import React, { useEffect } from "react";
import { lunCycle } from "../../redux/actions/lunCycleAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const LunTimeWrapper = styled.div`
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

const CycleWrapper = styled.div`
  width: 80%;
  display:flex;
  align-items: center;
  font-size: 0.8rem;
  flex-direction: ${props => props.flexDirection ? 'row' : `column`};
  justify-content: ${props => props.flexDirection ? 'space-between': 'center' };

  .item-rise-transit-set {
    display: flex;
    justify-content: center;
  }
  
`;

const LunTime = () => {
  const dispatch = useDispatch();
  const { data, isLoading} = useSelector(state => state.lun.cycle);
  // const canISeeTheMoon = useSelector(({ lun: { canISeeTheMoon } })=> canISeeTheMoon);
  const canISeeTheMoon = false;

  useEffect(() => {dispatch(lunCycle())}, []);
  
  return (
    <LunTimeWrapper>
      { isLoading 
        ? <div clasName='loading-ment'>Loading...</div>
        : ( 
          <>
            <div className='cnt-rise-transit-set'>
              <div className='cnt-items-rise-transit-set'>
                { data
                   && 
                    <CycleWrapper flexDirection={canISeeTheMoon}>
                      <div className='item-rise-transit-set'>월출 {data.moonrise}</div>
                      <div className='item-rise-transit-set'>월중 {data.moontransit}</div>
                      <div className='item-rise-transit-set'>월몰 {data.moonset}</div>
                    </CycleWrapper> 
                }
              </div>
            </div>

            { 
              canISeeTheMoon ||
                <div className='ment'>
                  현재 시각은 달을 볼 수 없습니다.
                </div>
            } 
          </>
          )}
    </LunTimeWrapper>)
};

export default LunTime;