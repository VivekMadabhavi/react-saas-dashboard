import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const data = [
  { name: 'Jan', revenue: 50, prevRevenue: 40 },
  { name: 'Feb', revenue: 60, prevRevenue: 55 },
  { name: 'Mar', revenue: 55, prevRevenue: 65 },
  { name: 'Apr', revenue: 70, prevRevenue: 60 },
  { name: 'May', revenue: 80, prevRevenue: 75 },
  { name: 'Jun', revenue: 75, prevRevenue: 85 },
];

const RevenueTrendChart: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const textColor = isDarkMode ? 'white' : '#1f2937';
  const mutedTextColor = isDarkMode ? '#d1d5db' : '#6b7280';
  const chartGridStroke = isDarkMode ? '#4b5563' : '#e5e7eb';
  const chartAxisStroke = isDarkMode ? '#9ca3af' : '#6b7280';

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      style={{
        // These styles are now handled by the cardContainerStyle passed from Home.tsx
        // backgroundColor: isDarkMode ? '#1f2937' : 'white',
        // padding: '24px',
        // borderRadius: '8px',
        // boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: '600', marginBottom: '24px', color: textColor }}>
        Revenue
        <span style={{ margin: '0 16px', color: mutedTextColor, fontSize: '18px', fontWeight: '400' }}>|</span>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isDarkMode ? '#60a5fa' : '#3b82f6', marginRight: '8px' }} />
        <p style={{ color: mutedTextColor, marginRight: '8px', fontSize: '14px', fontWeight: '400' }}>Current Week</p>
        <span style={{ fontWeight: 'bold', color: textColor, marginRight: '16px', fontSize: '14px' }}>$58,211</span>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isDarkMode ? '#a78bfa' : '#8b5cf6', marginRight: '8px' }} />
        <p style={{ color: mutedTextColor, marginRight: '8px', fontSize: '14px', fontWeight: '400' }}>Previous Week</p>
        <span style={{ fontWeight: 'bold', color: textColor, fontSize: '14px' }}>$68,768</span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{
          top: 5,
          right: 0,
          left: -20,
          bottom: 5,
        }}>
          <CartesianGrid vertical={false} stroke={chartGridStroke} strokeOpacity={0.3} />
          <XAxis dataKey="name" stroke={chartAxisStroke} tickLine={false} axisLine={false} style={{ fontSize: '12px' }} />
          <YAxis stroke={chartAxisStroke} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}M`} style={{ fontSize: '12px' }} />
          <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : 'white', border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`, borderRadius: '4px', color: textColor }} cursor={{ stroke: isDarkMode ? '#6b7280' : '#d1d5db', strokeDasharray: '3 3' }} />
          <Line type="monotone" dataKey="revenue" stroke={isDarkMode ? '#60a5fa' : '#3b82f6'} activeDot={{ r: 8 }} strokeWidth={2} />
          <Line type="monotone" dataKey="prevRevenue" stroke={isDarkMode ? '#a78bfa' : '#8b5cf6'} strokeDasharray="3 3" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueTrendChart;
