import React from "react";

import { useAppSelector } from '../../../redux/hooks';

import { LunTimeWrapper, CycleWrapper } from './style';

const LunTime = () => {
  const data = useAppSelector(state => state.lun.cycle.data);
  const canISeeTheMoon = useAppSelector(({ lun: { canISeeTheMoon } })=> canISeeTheMoon);
  
  return (
    <LunTimeWrapper justifyContent = { canISeeTheMoon }>
      <>
        <div className='cnt-rise-transit-set'>
          <div className='cnt-items-rise-transit-set'>
            { 
              <CycleWrapper flexDirection={ canISeeTheMoon }>
                <div className='item-rise-transit-set'>월출 { data!.moonrise }</div>
                <div className='item-rise-transit-set'>월중 { data!.moontransit }</div>
                <div className='item-rise-transit-set'>월몰 { data!.moonset }</div>
              </CycleWrapper> 
            }
          </div>
        </div>

        { canISeeTheMoon ||
          <div className='ment'>
            현재 시각은 달을 볼 수 없습니다.
          </div>
        } 
      </>
    </LunTimeWrapper>)
};

export default LunTime;