// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #20232a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.div`
  color: #61dafb;
  font-size: 24px;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Dashboard</Logo>
    <UserMenu>
      {/* Add user menu items here */}
    </UserMenu>
  </HeaderContainer>
);

export default Header;
