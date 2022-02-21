import React from 'react';
import styled from 'styled-components';
import { CELL_STATE } from './components/Logic/type';
import Cell from './components/Logic/Cell';
import Header from './components/Header';
import getLogic from './api/getLogic';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const logic = getLogic();

  return (
    <Container className='nemonemologic'>
      <Header title={logic.title} />

      <Cell state={CELL_STATE.FILL} />
      <Cell state={CELL_STATE.BLANK} />
      <Cell state={CELL_STATE.NOTHING} />
    </Container>
  );
}

export default App;
