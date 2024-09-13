import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CaseData } from './CaseFluctuations';

interface LineChartProps {
  data: CaseData
}

const CustomLineChart = ({ data } : LineChartProps) => {
  const formattedData = Object.entries(data).map(([date, cases]) => (
    {
      name: date,
      case: cases
    }
  ))

  const formatYAxis = (tick: any) => {
    if (tick >= 10000000) {
      return `${(tick / 10000000).toFixed(1)} Cr`;  // Crores
    } else if (tick >= 100000) {
      return `${(tick / 100000).toFixed(1)} L`;  // Lakhs
    } else {
      return tick;  // Return as-is if less than 1 lakh
    }
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="case" stroke="#8884d8" />
        </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;