import React, { useEffect } from "react";
import { lunCycle } from "../../redux/actions/lunCycleAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const LunTimeWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;

  .loading-ment {
    display: flex; 
    justify-content: space-between;
  }
  .cnt-rise-transit-set {
    width: 100%;
    display: flex; 
    justify-content: center;

    div {
      width: 80%;
      display: flex;

      .items-rise-transit-set {
        width: 100%;
        display:flex;
        justify-content: space-between;
        font-size: 0.8rem;

        .item-rise-transit-set {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;

const LunTime = () => {
  const dispatch = useDispatch();
  const { data, isLoading} = useSelector(state => state.lun.cycle);

  useEffect(() => {dispatch(lunCycle())}, []);
  
  return (
    <LunTimeWrapper>
      { isLoading 
        ? <div clasName='loading-ment'>Loading...</div>
        : ( 
            <div className='cnt-rise-transit-set'>
              <div>
                { data
                   && 
                    <div className='items-rise-transit-set'>
                      <div className='item-rise-transit-set'>월출 {data.moonrise}</div>
                      <div className='item-rise-transit-set'>월중 {data.moontransit}</div>
                      <div className='item-rise-transit-set'>월몰 {data.moonset}</div>
                    </div> 
                }
              </div>
            </div>
          )}
    </LunTimeWrapper>)
};

export default LunTime;