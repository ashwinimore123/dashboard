// src/components/Dashboard.tsx
import React from 'react';
import styled from 'styled-components';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import GoalsMenu from './GoalsMenu'; // Should be default export now

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #121212;
  color: white;
  flex: 1;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Dashboard = () => (
  <DashboardContainer>
    <TopSection>
      <div>Top widgets (Orders, Delivered, Cancelled, Revenue, Net Profit)</div>
      <div>Additional Info</div>
    </TopSection>
    <BottomSection>
      <ActivityChart />
      <RecentOrders />
      <CustomerFeedback />
      <GoalsMenu />
    </BottomSection>
  </DashboardContainer>
);

export default Dashboard;
