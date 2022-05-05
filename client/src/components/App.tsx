import React from 'react';
import styled from 'styled-components';

import LunTime from './sections/LunTime';
import LunImage from './sections/LunImage';
import LunDay from './sections/LunDay';
import GlobalStyle from '../style/GlobalStyle'

import { makeYearMonthDate } from '../fs';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .ctn-components {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 65vw;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background-color: #FBFAF8;
    border-radius: 15px;
    padding: 15px 0px 15px 0px;

    .text-year-month-date {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
    }
  }
`;
const App = () => {
  const {year, month, date} = makeYearMonthDate();

  return (
    <>
      <GlobalStyle />
      <AppWrapper> 
        <div className='ctn-components'>
            <div className='text-year-month-date'>
              { `${year}년 ${month}월 ${date}일 / 서울` }
            </div>
            <LunDay />
            <LunImage />
            <LunTime />
        </div>
      </AppWrapper>
    </>
  );
};

export default App;