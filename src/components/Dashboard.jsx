import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './Dashboardcontent';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.div`
  background: #2c2c38;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Main>
        <Header />
        <DashboardContent />
      </Main>
    </DashboardContainer>
  );
};

export default Dashboard;
