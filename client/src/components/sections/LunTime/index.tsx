import React, { useEffect } from "react";

import { lunCycle } from "../../../redux/actions/lunCycleAction";
import { useAppSelector, useAppDispath } from '../../../redux/hooks';

import { LunTimeWrapper, CycleWrapper } from './style';

const LunTime = () => {
  const dispatch = useAppDispath();
  const { data, isLoading} = useAppSelector(state => state.lun.cycle);
  const canISeeTheMoon = useAppSelector(({ lun: { canISeeTheMoon } })=> canISeeTheMoon);

  useEffect(() => { dispatch(lunCycle()) }, []);
  
  return (
    <LunTimeWrapper>
      { isLoading 
        ? <div className='loading-ment'>Loading...</div>
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