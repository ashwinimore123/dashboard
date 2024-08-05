// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #282c34;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => (
  <AppContainer>
    <Sidebar />
    <MainContent>
      <Header />
      <Dashboard />
    </MainContent>
  </AppContainer>
);

export default App;
