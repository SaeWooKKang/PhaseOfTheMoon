import React from 'react';
import { useEffect } from 'react';
import { lunDay } from '../actions/lunDayAction';
import { useDispatch, useSelector } from 'react-redux';

const Lunday = () => {
  const dispatch = useDispatch();
  const day = useSelector((state) => state.lun.day);

  useEffect(()=>dispatch(lunDay()),[]);
  
  return (
    <div>
      {day.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>월령: {day.data}일</div>)   
      }
    </div>
  )
};

export default Lunday;