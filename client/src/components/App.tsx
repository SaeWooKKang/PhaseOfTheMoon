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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    margin-left: 10px;
    display: flex;
    width: 65vw;
    margin-bottom: 15px;
    color: #fff;

    a {
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 2px 6px;
      /* background: rgb(255,255,255, 0.9); */
      color: #fff;
    }

    // 선택된 버튼 적용할 css
    a:nth-child(1) {
      background: #fff;
      color: #254EDB
    }
  }

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
        <header>
          <nav>
            <a>Today</a> | {' '}
            <a>Weekly</a>
          </nav>
        </header>
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