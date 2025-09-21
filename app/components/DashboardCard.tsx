import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import IncreaseImage from '../assets/images/Increase.svg'; // Import Increase.svg
import DecreaseImage from '../assets/images/Decrease.svg'; // Import Decrease.svg

interface DashboardCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  icon?: ReactNode; // Optional icon prop
  style?: React.CSSProperties; // Add optional style prop
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, percentage, isPositive, icon, style }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isHovered, setIsHovered] = React.useState(false);

  const percentageColor = isPositive ? (isDarkMode ? '#34d399' : '#10b981') : (isDarkMode ? '#ef4444' : '#ef4444');

  const arrowIcon = (
    <img
      src={isPositive ? IncreaseImage : DecreaseImage}
      alt={isPositive ? "Increase Arrow" : "Decrease Arrow"}
      style={{ width: '16px', height: '16px', display: 'inline-block', marginRight: '4px', filter: isDarkMode ? 'invert(1)' : 'none', verticalAlign: 'middle' }}
    />
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        flex: 1,
        minWidth: '200px',
        display: 'flex', // Added to enable flexbox
        flexDirection: 'column', // Arrange children vertically
        justifyContent: 'center', // Center children vertically
        ...style,
      }}
    >
      <h3 style={{ color: isDarkMode ? '#9ca3af' : '#1f2937', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>{title}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '36px', overflow: 'hidden' }}>
        {isHovered ? (
          <>
            <motion.p layout key="percentage" style={{ color: percentageColor, fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              {percentage} {arrowIcon}
            </motion.p>
            <motion.p layout key="value" style={{ fontSize: '24px', fontWeight: 'bold', color: isDarkMode ? 'white' : '#1f2937', whiteSpace: 'nowrap' }}>
              {value}
            </motion.p>
          </>
        ) : (
          <>
            <motion.p layout key="value" style={{ fontSize: '24px', fontWeight: 'bold', color: isDarkMode ? 'white' : '#1f2937', whiteSpace: 'nowrap' }}>
              {value}
            </motion.p>
            <motion.p layout key="percentage" style={{ color: percentageColor, fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              {percentage} {arrowIcon}
            </motion.p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default DashboardCard;
