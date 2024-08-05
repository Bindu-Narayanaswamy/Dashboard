import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  margin-right: 10px;
`;

const FeedbackContent = styled.div`
  flex: 1;
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Stars = styled.div`
  color: #ffc107;
`;

const Text = styled.div`
  margin-top: 5px;
  font-size: 0.9rem;
`;

const FeedbackItem = ({ name, stars, text }) => {
  return (
    <FeedbackContainer>
      <Avatar />
      <FeedbackContent>
        <FeedbackHeader>
          <Name>{name}</Name>
          <Stars>{'★'.repeat(stars)}</Stars>
        </FeedbackHeader>
        <Text>{text}</Text>
      </FeedbackContent>
    </FeedbackContainer>
  );
};

export default FeedbackItem;
