import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

const topSellingProducts: Product[] = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

const TopSellingProducts: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const textColor = isDarkMode ? 'white' : '#1f2937';
  const mutedTextColor = isDarkMode ? '#9ca3af' : '#6b7280'; // Adjusted mutedTextColor
  const borderColor = isDarkMode ? '#374151' : '#e5e7eb'; // Adjusted borderColor
  const headerBgColor = isDarkMode ? '#2d3748' : '#f9fafb'; // Adjusted headerBgColor

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
      <h3 style={{ color: textColor, fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>Top Selling Products</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ minWidth: '100%', borderCollapse: 'collapse', borderSpacing: 0 }}>
          <thead style={{ backgroundColor: headerBgColor, borderBottom: `1px solid ${borderColor}` }}>
            <tr>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: mutedTextColor }}>Name</th>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: mutedTextColor }}>Price</th>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: mutedTextColor }}>Quantity</th>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: mutedTextColor }}>Amount</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white' }}>
            {topSellingProducts.map((product, index) => (
              <motion.tr key={index} whileHover={{ scale: 1.005, backgroundColor: isDarkMode ? '#2d3748' : '#f7fafc' }} style={{ transition: 'all 0.2s ease-in-out' }}>
                <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', fontWeight: '500', color: textColor }}>{product.name}</td>
                <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', color: mutedTextColor }}>{product.price}</td>
                <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', color: mutedTextColor }}>{product.quantity}</td>
                <td style={{ padding: '16px 24px', whiteSpace: 'nowrap', fontSize: '14px', color: mutedTextColor }}>{product.amount}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TopSellingProducts;
