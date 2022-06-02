import React from 'react';
import styled from 'styled-components';

interface Props {
  rise: string;
  transit: string;
  set: string;
}

const Wrapper = styled.section`
  width: 96%;
  color: #fff;

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
      list-style-type: none;
      padding-left: 7px;
    }
  }
`;

const WeeklyListItem = (props: Props) => {

  return (
    <Wrapper>
      <div className='day'>06월11일</div> 
      <ul>
        <li>월출: { props.rise } </li>
        <li>월중: { props.transit }</li>
        <li>월몰: { props.set }</li>
      </ul>
    </Wrapper>
  );
};

export default WeeklyListItem;