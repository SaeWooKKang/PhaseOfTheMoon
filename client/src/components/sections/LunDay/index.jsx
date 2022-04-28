import React, { useEffect } from 'react';

import { lunDay } from '../../../redux/actions/lunDayAction';
import { useDispatch, useSelector } from 'react-redux';
import { LunDayWrapper } from './style'

const LunDay = () => {
  const dispatch = useDispatch();
  const day = useSelector(state => state.lun.day);

  useEffect(()=> dispatch(lunDay()), []);
  
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