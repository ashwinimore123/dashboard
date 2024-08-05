// src/components/CustomerFeedback.tsx
import React from 'react';
import styled from 'styled-components';

const CustomerFeedbackContainer = styled.div`
  flex: 1;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
`;

const FeedbackItem = styled.div`
  margin-bottom: 20px;
`;

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      rating: 5,
      comment: 'The food was excellent and so was the service.',
    },
    {
      name: 'Dianne Russell',
      rating: 4,
      comment: 'I enjoyed the Eggs Benedict served on homemade focaccia.',
    },
    {
      name: 'Devon Lane',
      rating: 4,
      comment: 'Normally wines are vinos but theirs are lean meaty and tender.',
    },
    // Add more feedback
  ];

  return (
    <CustomerFeedbackContainer>
      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={index}>
          {feedback.name} - {feedback.rating} stars - {feedback.comment}
        </FeedbackItem>
      ))}
    </CustomerFeedbackContainer>
  );
};

export default CustomerFeedback;
