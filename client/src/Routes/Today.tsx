import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';

import LunDay from '../components/sections/LunDay';
import LunImage from '../components/sections/LunImage';
import LunTime from '../components/sections/LunTime';
import AppLayout from '../components/AppLayout';

import { makeYearMonthDate } from '../fs';
import GlobalStyle from '../style/GlobalStyle';

import { useAppSelector, useAppDispath } from '../redux/hooks';
import { lunDay } from '../redux/actions/lunDayAction';
import { lunCycle } from '../redux/actions/lunCycleAction';

import ReactLoading from 'react-loading';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .text-year-month-date {
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
`;

const Today = () => {
  const dispatch = useAppDispath();
  const { cycle, day } = useAppSelector(({ lun })=> lun);
  const canISeeTheMoon = useAppSelector(({ lun }) => lun.canISeeTheMoon );

  const { year, month, date } = useMemo(() => {
    return  makeYearMonthDate();
  }, []);

  useEffect(() => { 
    dispatch(lunDay());
    dispatch(lunCycle());
  }, []);
  
  return (
    <>
    <GlobalStyle />
    <AppLayout>
      <Wrapper>
        { cycle.data && day.data ? 
          <>
            {/* 년, 월, 일 */}
            <div className='text-year-month-date' style={{ height: '10%' }}>
              { `${year}년 ${month}월 ${date}일 / 서울` }
            </div>

            {/* LunDay */}
            <div style={{ height: '25%' }}>
              <LunDay />
            </div>

            {/* LunImage & LunTime */}
            <div style={{ 
              height: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: canISeeTheMoon ? 'center' : 'flex-start' }}
              >
              <LunImage />
              <LunTime />
            </div>
          </>
          : 
          <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ReactLoading type={'bubbles'} color={'#4164d5'} height={'15%'} width={'15%'} />
          </div>
        }
      </Wrapper>
    </AppLayout>
    </>
  );
};

export default Today;
