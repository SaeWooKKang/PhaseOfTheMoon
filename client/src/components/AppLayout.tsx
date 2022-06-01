import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

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
  }
`;
const AppLayout = (props: Props ) => {

  return (
    <>
      <AppWrapper> 
        <header>
          <nav>
            <Link to={'/today'}>Today</Link> | {' '}
            <Link to={'/weekly'}>Weekly</Link>
          </nav>
        </header>
        <div className='ctn-components'>
          { props.children }
        </div>
      </AppWrapper>
    </>
  );
};

export default AppLayout;