import React from 'react';

import GlobalStyle from '../style/GlobalStyle'
import styled from 'styled-components';

import Today from '../Routes/Today';
// import Weekly from '../Routes/Weekly';

const Wrapper = styled.div`
  .a:nth-child(1) {
    background: #fff;
    color: #254EDB;  
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Today />
      </Wrapper>
    </>
  );
};

export default App;