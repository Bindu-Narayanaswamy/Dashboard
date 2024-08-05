import React from 'react';
import styled from 'styled-components';
import ActivityGraph from './ActivityGraph';
import FeedbackItem from './FeedbackItem';

const ContentContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #3b3b4f;
  padding: 20px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const StatsCard = styled(Card)`
  justify-content: space-between;
  align-items: center;
`;

const StatsValue = styled.div`
  font-size: 2rem;
`;

const StatsLabel = styled.div`
  font-size: 1rem;
  opacity: 0.7;
`;

const GraphCard = styled(Card)`
  grid-column: span 4;
  @media (max-width: 768px) {
    grid-column: span 2;
  }
  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

const OrderListCard = styled(Card)`
  grid-column: span 2;
  @media (max-width: 768px) {
    grid-column: span 2;
  }
  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

const FeedbackCard = styled(Card)`
  grid-column: span 2;
  @media (max-width: 768px) {
    grid-column: span 2;
  }
  @media (max-width: 480px) {
    grid-column: span 1;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #4b4b5e;
  color: white;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  color: white;
`;

const DashboardContent = () => {
  return (
    <ContentContainer>
      <StatsCard>
        <StatsLabel>Total Orders</StatsLabel>
        <StatsValue>75</StatsValue>
      </StatsCard>
      <StatsCard>
        <StatsLabel>Total Delivered</StatsLabel>
        <StatsValue>70</StatsValue>
      </StatsCard>
      <StatsCard>
        <StatsLabel>Total Cancelled</StatsLabel>
        <StatsValue>05</StatsValue>
      </StatsCard>
      <StatsCard>
        <StatsLabel>Total Revenue</StatsLabel>
        <StatsValue>$12k</StatsValue>
      </StatsCard>
      <StatsCard>
        <StatsLabel>Net Profit</StatsLabel>
        <StatsValue>$6759.25</StatsValue>
      </StatsCard>
      <Card>
        <h3>Goals</h3>
      </Card>
      <Card>
        <h3>Popular Dishes</h3>
      </Card>
      <Card>
        <h3>Menu</h3>
      </Card>
      <GraphCard>
        <ActivityGraph />
      </GraphCard>
      <OrderListCard>
        <h3>Orders List</h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>Customer Name</TableHeader>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData>John Doe</TableData>
              <TableData>#12345</TableData>
              <TableData>$100</TableData>
              <TableData>Delivered</TableData>
            </tr>
            <tr>
              <TableData>Jane Smith</TableData>
              <TableData>#12346</TableData>
              <TableData>$150</TableData>
              <TableData>Cancelled</TableData>
            </tr>
            <tr>
              <TableData>Robert Brown</TableData>
              <TableData>#12347</TableData>
              <TableData>$200</TableData>
              <TableData>Pending</TableData>
            </tr>
          </tbody>
        </Table>
      </OrderListCard>
      <FeedbackCard>
        <h3>Customer's Feedback</h3>
        <FeedbackItem
          name="Jenny Wilson"
          stars={5}
          text="The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
        />
        <FeedbackItem
          name="Dianne Russell"
          stars={5}
          text="We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
        />
        <FeedbackItem
          name="Devon Lane"
          stars={4}
          text="Nominally wings are wings, but theirs are lean, meaty, and tender, and their spicy buffalo sauce is killer."
        />
      </FeedbackCard>
    </ContentContainer>
  );
};

export default DashboardContent;
