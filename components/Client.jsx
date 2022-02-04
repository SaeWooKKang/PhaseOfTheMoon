import React from 'react';
import Luncycle from './Luncycle';
import Lunday from './Lunday';
import '../dist/style.css'

const fs = require('../fs');

const Client = () => {
  const {year, month, date} = fs.date();

  return (
    <div className='container'>
      <div className='lunContainer'>
          <div className='YMD'>
            {`${year}년 ${month}월 ${date}일 / 서울`}
          </div>
          <Lunday />
          <Luncycle />
      </div>
    </div>
  );
};

export default Client;