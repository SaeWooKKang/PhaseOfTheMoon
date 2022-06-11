import React from 'react';
import styled from 'styled-components';

import { NavLink, Outlet } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const AppWrapper = styled.div`
  width: 100%;
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
      color: #fff;
      text-decoration: none;
    }
    @media (max-width: 510px) {
      width: 95%;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 65vw;
    height: 80vh;

    background-color: #FBFAF8;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 15px;
    padding: 15px 0px 15px 0px;
    overflow: hidden;
    
    @media (max-width: 510px) {
      width: 95%;
    }
  }
`;
const AppLayout = (props: Props ) => {

  return (
    <AppWrapper> 

      {/* header  */}
      <header>
        <nav>
          <NavLink 
            className='a' 
            to={'/today'} 
            style={({ isActive }) => { 
              return {
                background: isActive ? '#fff' : '',
                color: isActive ? '#254EDB' : ''
            }}}>Today</NavLink> | {' '}
          <NavLink 
            className='a'
            to={'/weekly'}
            style={({ isActive }) => { 
              return {
                background: isActive ? '#fff' : '',
                color: isActive ? '#254EDB' : ''
            }}}>Weekly</NavLink>
        </nav>
        <Outlet />
      </header>

      {/* main */}
      <main>
        { props.children }
      </main>
    </AppWrapper>
  );
};

export default AppLayout;