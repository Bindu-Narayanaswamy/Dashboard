import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '15', uv: 2780 },
  { name: '19', uv: 1890 },
  { name: '21', uv: 2390 },
  { name: '23', uv: 3490 },
  { name: '25', uv: 2000 },
  { name: '27', uv: 2780 },
];

const GraphContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const ActivityGraph = () => {
  return (
    <GraphContainer>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="uv" stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default ActivityGraph;
