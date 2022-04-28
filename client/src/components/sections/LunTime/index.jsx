import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { lunCycle } from "../../../redux/actions/lunCycleAction";
import { LunTimeWrapper, CycleWrapper } from './style';

const LunTime = () => {
  const dispatch = useDispatch();
  const { data, isLoading} = useSelector(state => state.lun.cycle);
  const canISeeTheMoon = useSelector(({ lun: { canISeeTheMoon } })=> canISeeTheMoon);

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