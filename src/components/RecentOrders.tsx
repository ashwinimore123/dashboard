// src/components/RecentOrders.tsx
import React from 'react';
import styled from 'styled-components';

const RecentOrdersContainer = styled.div`
  flex: 1;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
`;

const OrderItem = styled.div`
  margin-bottom: 10px;
`;

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15472856', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48905786', amount: '$385.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78958251', amount: '$45.88', status: 'Cancelled' },
    // Add more orders
  ];

  return (
    <RecentOrdersContainer>
      {orders.map((order, index) => (
        <OrderItem key={index}>
          {order.customer} - {order.orderNo} - {order.amount} - {order.status}
        </OrderItem>
      ))}
    </RecentOrdersContainer>
  );
};

export default RecentOrders;
