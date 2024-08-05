// src/components/GoalsMenu.tsx
import React from 'react';
import styled from 'styled-components';

const GoalsMenuContainer = styled.div`
  flex: 1;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
`;

const GoalsMenuItem = styled.div`
  margin-bottom: 20px;
`;

const GoalsMenu = () => {
  const goals = [
    'Increase total orders',
    'Improve delivery time',
    'Reduce cancellations',
    'Increase total revenue',
  ];

  return (
    <GoalsMenuContainer>
      {goals.map((goal, index) => (
        <GoalsMenuItem key={index}>{goal}</GoalsMenuItem>
      ))}
    </GoalsMenuContainer>
  );
};

export default GoalsMenu;
