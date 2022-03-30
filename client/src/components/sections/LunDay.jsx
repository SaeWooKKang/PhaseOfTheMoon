import React from 'react';
import { useEffect } from 'react';
import { lunDay } from '../../redux/actions/lunDayAction';
import { useDispatch, useSelector } from 'react-redux';

const LunDay = () => {
  const dispatch = useDispatch();
  const day = useSelector(state => state.lun.day);

  useEffect(()=>dispatch(lunDay()),[]);
  
  return (
    <div>
      {day.isLoading 
        ? ( <div>Loading...</div> ) 
        : (
          <div className='lunAge'>
            {!day.isLoading && <div className='date'>월령 {day.data}일</div>}
          </div>)
      }
    </div>
  );
};

export default LunDay;