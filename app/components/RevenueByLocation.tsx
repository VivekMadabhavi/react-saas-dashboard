import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import WorldMap from '../assets/images/World Map.svg'; // Import the SVG image

interface LocationData {
  city: string;
  revenue: string;
}

const revenueData: LocationData[] = [
  { city: 'New York', revenue: '72K' },
  { city: 'San Francisco', revenue: '39K' },
  { city: 'Sydney', revenue: '25K' },
  { city: 'Singapore', revenue: '61K' },
];

const parseRevenue = (revenueStr: string): number => {
  const value = parseFloat(revenueStr);
  if (revenueStr.includes('K')) {
    return value * 1000;
  }
  return value;
};

const RevenueByLocation: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const textColor = isDarkMode ? 'white' : '#1f2937';
  const mutedTextColor = isDarkMode ? '#d1d5db' : '#6b7280';

  const maxRevenue = Math.max(...revenueData.map(item => parseRevenue(item.revenue)));

  const getPercentage = (revenueStr: string): number => {
    const numericalRevenue = parseRevenue(revenueStr);
    return (numericalRevenue / maxRevenue) * 100;
  };

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
      <h3 style={{ color: textColor, fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>Revenue by Location</h3>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <img src={WorldMap} alt="World Map" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {revenueData.map((data) => (
          <li key={data.city} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ color: mutedTextColor, fontSize: '14px' }}>{data.city}</span>
              <span style={{ fontWeight: '600', color: textColor, fontSize: '14px' }}>{data.revenue}</span>
            </div>
            <div style={{ width: '100%', height: '4px', backgroundColor: isDarkMode ? '#4b5563' : '#e5e7eb', borderRadius: '2px', position: 'relative' }}>
              <div style={{ width: getPercentage(data.revenue) + '%', height: '100%', backgroundColor: isDarkMode ? '#60a5fa' : '#A8C5DA', borderRadius: '2px' }} />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RevenueByLocation;
