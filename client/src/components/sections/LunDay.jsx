import React from 'react';
import { useEffect } from 'react';
import { lunDay } from '../../redux/actions/lunDayAction';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const LunDayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .loading-ment {
    display: flex;
    justify-content: center;
  }
  .lunAge {
    margin-top: 1rem;
    margin-bottom: 3rem;

    .date {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
    }
  }
`;
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