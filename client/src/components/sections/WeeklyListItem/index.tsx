import React from 'react';
import styled from 'styled-components';

interface Props {
  rise: string;
  transit: string;
  set: string;
  date: string;
}

const Wrapper = styled.section`
  width: 96%;
  color: #fff;
  font-weight: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  background-color: rgba( 37, 78, 219, 0.8 );

  padding: 0px 2%;
  margin-bottom: 5px;

  .day {
    width: 30%;
  }

  .day::after {
    margin-left: 15px;
    content: ' | ';
  }

  ul {
    width: 70%;
    display: flex;
    justify-content: space-around;
    padding: initial;

    li {
      width: 33.3333%;
      list-style-type: none;
      padding-left: 7px;
    }
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const WeeklyListItem = (props: Props) => {
  let date = String(props.date).split('');
  const month = date.slice(4,6).join('');
  const day = date.slice(6).join('');
  
  return (
    <Wrapper>

      <div className='day'>{`${month}월 ${day}일`}</div> 
      <ul>
        <li>월출: { props.rise } </li>
        <li>월중: { props.transit }</li>
        <li>월몰: { props.set }</li>
      </ul>
    </Wrapper>
  );
};

export default WeeklyListItem;