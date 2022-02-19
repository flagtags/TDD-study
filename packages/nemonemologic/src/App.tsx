import React from 'react';
import getLogic from './api/getLogic';
import Header from './components/Header'
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  const logic = getLogic()

  return (
    <Container className="nemonemologic">
      <Header title={logic.title}/>
    </Container>
  );
}

export default App;
