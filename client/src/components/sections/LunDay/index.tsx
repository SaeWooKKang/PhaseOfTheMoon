import React, { useEffect } from 'react';

import { lunDay } from '../../../redux/actions/lunDayAction';
import { useAppSelector, useAppDispath } from '../../../redux/hooks';

import { LunDayWrapper } from './style'

const LunDay = () => {
  const dispatch = useAppDispath();
  const day = useAppSelector(state => state.lun.day);

  useEffect(() => { dispatch(lunDay()) }, []);
  
  return (
    <LunDayWrapper>
      { day.isLoading 
        ? <div className='loading-ment'>Loading...</div> 
        : ( 
            <div className='lunAge'>
              { !day.isLoading 
                && 
                  <div className='date'>
                    월령 {day.data}일
                  </div>
              }
            </div>
          )
      }
    </LunDayWrapper>
  );
};

export default LunDay;