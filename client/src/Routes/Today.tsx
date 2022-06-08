import React from 'react';
import styled from 'styled-components';

import LunDay from '../components/sections/LunDay';
import LunImage from '../components/sections/LunImage';
import LunTime from '../components/sections/LunTime';
import AppLayout from '../components/AppLayout';

import { makeYearMonthDate } from '../fs';
import GlobalStyle from '../style/GlobalStyle';

const Wrapper = styled.div`
  width: 100%;

  .text-year-month-date {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
    }
`;

const Today = () => {
  const { year, month, date } = makeYearMonthDate();
  alert('🚧 현재 공공데이터포털의 api 접속이 안됩니다. 🚧 ');

  return (
    <>
    <GlobalStyle />
    <AppLayout>
      <Wrapper>
        <div className='text-year-month-date'>
          { `${year}년 ${month}월 ${date}일 / 서울` }
        </div>
        <LunDay />
        <LunImage />
        <LunTime />
      </Wrapper>
    </AppLayout>
    </>
  );
};

export default Today;
