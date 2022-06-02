import React from 'react';

import AppLayout from '../components/AppLayout';
import GlobalStyle from '../style/GlobalStyle';
import styled from 'styled-components';

import WeeklyListItem from '../components/sections/WeeklyListItem';

const items = [
  { moonrise: '0000', moontransit: '0000', moonset: '0000' },
	{ moonrise: '0000', moontransit: '0000', moonset: '0000' },
	{ moonrise: '0000', moontransit: '0000', moonset: '0000' },
	{ moonrise: '0000', moontransit: '0000', moonset: '0000' },
	{ moonrise: '0000', moontransit: '0100', moonset: '0200' },
	{ moonrise: '0000', moontransit: '0000', moonset: '0000' },
	{ moonrise: '0000', moontransit: '0000', moonset: '0000' }
];

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  overflow: hidden;
  
  header {
    width: 100%;
    display: flex;
    margin: 0;
    margin-bottom: 30px;
    flex-direction: column;
    color: #254EDB;
    
    h2 {
      margin: 0;
    }
    h4 {
      color: #4164d5;
    }
  }
  .weekly-list-items {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Weekly = () => {
  return (
    <>
    <GlobalStyle />
    <AppLayout>
      <Wrapper>
        <header>
          <h2>주간</h2>
          <h4>6월 2일 ~ 6월 8일</h4>
        </header>
        <section className='weekly-list-items'>
          {
            items.map(item => (
              <WeeklyListItem 
                key= { item.moonrise }
                rise= { item.moonrise }
                transit = { item.moontransit }
                set = { item.moonset }
              />
            ))
          }      
        </section>
      </Wrapper>
    </AppLayout>
    </>
  );
};

export default Weekly;