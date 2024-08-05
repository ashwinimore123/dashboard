// src/components/Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import { Home, Search, Assessment, Settings, AccountCircle } from '@mui/icons-material';

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #20232a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const IconWrapper = styled.div`
  margin: 20px 0;
  color: #61dafb;
  cursor: pointer;

  &:hover {
    color: #21a1f1;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <IconWrapper><Home /></IconWrapper>
    <IconWrapper><Search /></IconWrapper>
    <IconWrapper><Assessment /></IconWrapper>
    <IconWrapper><Settings /></IconWrapper>
    <IconWrapper><AccountCircle /></IconWrapper>
  </SidebarContainer>
);

export default Sidebar;
