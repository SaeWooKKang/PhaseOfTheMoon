import React from 'react';

import { useAppSelector } from '../../../redux/hooks';

import { LunDayWrapper } from './style'

const LunDay = () => {
  const day = useAppSelector(state => state.lun.day);
  
  return (
    <LunDayWrapper>
      <div className='lunAge'>
        <div className='date'>
          월령 { day.data }일
        </div>
      </div>
    </LunDayWrapper>
  );
};

export default LunDay;