import React, { useEffect } from 'react';

import AppLayout from '../components/AppLayout';
import GlobalStyle from '../style/GlobalStyle';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

import WeeklyListItem from '../components/sections/WeeklyListItem';

import { lunWeekly } from '../redux/actions/lunWeeklyAction'
import { useAppDispath, useAppSelector } from '../redux/hooks'

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  header {
    width: 100%;
    height: 20%;
    display: flex;
    margin: 0;
    margin-bottom: 30px;
    flex-direction: column;
    color: #254EDB;
    
    h2 {
      margin: 10px 0 0 0;
    }
    h4 {
      color: #4164d5;
    }
  }
  .weekly-list-items {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  @media (max-width: 767px) {
    width: 95%;
  }
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Weekly = () => {
  const dispatch = useAppDispath();
  const weeklyItems = useAppSelector(state => state.weekly.data);
  const isLoading = useAppSelector(state => state.weekly.isLoading);

  useEffect(() => { dispatch(lunWeekly()) }, []);

  const now = Date.now();
  const today = new Date(now);
  
  const after = now as unknown as number + 86400000 * 6;
  const after7days = new Date(after);

  return (
    <>
    <GlobalStyle />
    <AppLayout>
      <Wrapper>
        <header>
          <h2>주간</h2>
          <h4>
            { `${today.getMonth() + 1}월 ${today.getDate()}일 ~ ${after7days.getMonth() + 1}월 ${after7days.getDate()}일` }
          </h4>
        </header>
        <section className='weekly-list-items'>
          {
            isLoading 
              ?  <LoadingWrapper>
                    <ReactLoading type={'bubbles'} color={'#4164d5'} height={'15%'} width={'15%'} />
                  </LoadingWrapper>
              : weeklyItems && weeklyItems.map(item => (
                  <WeeklyListItem 
                    key= { item.locdate }
                    date = { item.locdate } 
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