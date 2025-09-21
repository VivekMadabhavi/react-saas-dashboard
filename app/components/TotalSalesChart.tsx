import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface SalesData {
  name: string;
  value: number;
  color: string;
  [key: string]: any; // Add index signature to allow string keys
}

const data: SalesData[] = [
  { name: 'Direct', value: 300.56, color: '#c7d2fe' }, // Light indigo
  { name: 'Affiliate', value: 135.18, color: '#a78bfa' }, // Purple
  { name: 'Sponsored', value: 154.02, color: '#a7f3d0' }, // Light green
  { name: 'E-mail', value: 48.96, color: '#bae6fd' }, // Light blue
];

const TotalSalesChart: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const textColor = isDarkMode ? 'white' : '#1f2937';
  const mutedTextColor = isDarkMode ? '#d1d5db' : '#6b7280';
  const tooltipBg = isDarkMode ? '#374151' : 'white';
  const tooltipBorder = isDarkMode ? '#4b5563' : '#d1d5db';

  const COLORS = isDarkMode ? [
    '#c7d2fe', // Light indigo
    '#a78bfa', // Purple
    '#a7f3d0', // Light green
    '#bae6fd', // Light blue
  ] : [
    '#c7d2fe', // Light indigo (light purple)
    '#a7f3d0', // Light green
    '#93c5fd', // Light blue
    '#1C1C1C', // Black
  ];

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
      <h3 style={{ color: textColor, fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>Total Sales</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50} // Adjusted for fatter donut
            outerRadius={80} // Adjusted for fatter donut
            // fill="#8884d8" // Fill is handled by Cell component
            dataKey="value"
            cornerRadius={5} // Added cornerRadius for rounded edges as per image
            paddingAngle={5} // Adjusted paddingAngle for gap between slices
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}`, borderRadius: '4px', color: textColor }}
            formatter={(value: number) => `$${value.toFixed(2)}`}
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Removed the 38.6% text */}
      <ul style={{ marginTop: '40px', listStyle: 'none', padding: 0 }}> {/* Further adjusted marginTop to position below chart */}
        {data.map((entry, index) => (
          <li key={entry.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', color: mutedTextColor }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', marginRight: '8px', backgroundColor: COLORS[index % COLORS.length] }}></span>
              {entry.name}
            </div>
            <span style={{ fontWeight: '600', color: textColor }}>${entry.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TotalSalesChart;
