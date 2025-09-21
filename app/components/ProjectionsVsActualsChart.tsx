import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const data = [
  { name: 'Jan', projections: 40, actuals: 24 },
  { name: 'Feb', projections: 30, actuals: 13 },
  { name: 'Mar', projections: 20, actuals: 98 },
  { name: 'Apr', projections: 27, actuals: 39 },
  { name: 'May', projections: 18, actuals: 48 },
  { name: 'Jun', projections: 23, actuals: 38 },
  { name: 'Jul', projections: 34, actuals: 43 },
];

const ProjectionsVsActualsChart: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const textColor = isDarkMode ? 'white' : '#1f2937';
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
      <h3 style={{ color: textColor, fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>Projections vs Actuals</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{
          top: 5,
          right: 0,
          left: -20,
          bottom: 5,
        }}>
          <CartesianGrid vertical={false} stroke={chartGridStroke} strokeOpacity={0.3} />
          <XAxis dataKey="name" stroke={chartAxisStroke} tickLine={false} axisLine={false} style={{ fontSize: '12px' }} />
          <YAxis stroke={chartAxisStroke} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}M`} style={{ fontSize: '12px' }} />
          <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : 'white', border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`, borderRadius: '4px', color: textColor }} cursor={{ fill: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
          <Bar dataKey="projections" fill={isDarkMode ? '#6b7280' : '#A8C5DA'} name="Projections" stackId="a" />
          <Bar dataKey="actuals" fill={isDarkMode ? '#9ca3af' : '#E0EBF6'} name="Actuals" stackId="a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ProjectionsVsActualsChart;
