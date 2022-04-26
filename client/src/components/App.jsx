import React from 'react';

import LunTime from './sections/LunTime';
import LunImage from './sections/LunImage';
import LunDay from './sections/Lunday';
import '../../../dist/style.css';

const fs = require('../fs');

const App = () => {
  const {year, month, date} = fs.date();

  return (
    <div className='container' style={{height:'100vh'}}>
      <div className='lunContainer'>
          <div className='YMD'>{ `${year}년 ${month}월 ${date}일 / 서울` }</div>
          <LunDay />
          <LunImage />
          <LunTime />
      </div>
    </div>
  );
};

export default App;