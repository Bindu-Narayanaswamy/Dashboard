import React from 'react';
import { FaHome, FaChartLine, FaUtensils } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background: #1e1e2d;
  width: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 768px) {
    width: 60px;
  }
`;

const Icon = styled.div`
  color: #fff;
  font-size: 1.5rem;
  margin: 20px 0;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon><FaHome /></Icon>
      <Icon><FaChartLine /></Icon>
      <Icon><FaUtensils /></Icon>
    </SidebarContainer>
  );
};

export default Sidebar;
