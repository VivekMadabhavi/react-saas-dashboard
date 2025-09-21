import React, { useState, useMemo } from 'react';
import { mockOrders, type Order } from '../utils/mockData.ts';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import ButtonImage from '../assets/images/Button.svg';
import StarImage from '../assets/images/Star.svg';
import MagnificationImage from '../assets/images/Magnification.svg'; // Import Magnification.svg
import PlusImage from '../assets/images/Plus.svg';
import BarsImage from '../assets/images/Bars.svg';
import ArrowsImage from '../assets/images/Arrows.svg';
import C1Image from '../assets/images/C1.svg';
import C2Image from '../assets/images/C2.svg';
import C3Image from '../assets/images/C3.svg';
import C4Image from '../assets/images/C4.svg';
import C5Image from '../assets/images/C5.svg';
import C6Image from '../assets/images/C6.svg';
import LeftImage from '../assets/images/Left.svg'; // Import Left.svg
import RightImage from '../assets/images/Right.svg'; // Import Right.svg

// Basic CSS for status badges
const getStatusStyles = (status: Order['status'], theme: 'light' | 'dark') => {
  const baseTextStyle = {
    fontSize: '12px',
    lineHeight: '1rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
  };

  const dotStyle = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginRight: '8px',
  };

  switch (status) {
    case 'In Progress':
      return {
        text: { ...baseTextStyle, color: theme === 'dark' ? '#fed7aa' : '#8b5cf6' }, // Adjusted text color for light mode
        dot: { ...dotStyle, backgroundColor: theme === 'dark' ? '#fed7aa' : '#8b5cf6' }, // Adjusted dot color for light mode
      };
    case 'Complete':
      return {
        text: { ...baseTextStyle, color: theme === 'dark' ? '#a7f3d0' : '#10b981' }, // Adjusted text color for light mode
        dot: { ...dotStyle, backgroundColor: theme === 'dark' ? '#a7f3d0' : '#10b981' }, // Adjusted dot color for light mode
      };
    case 'Pending':
      return {
        text: { ...baseTextStyle, color: theme === 'dark' ? '#bfdbfe' : '#3b82f6' }, // Adjusted text color for light mode
        dot: { ...dotStyle, backgroundColor: theme === 'dark' ? '#bfdbfe' : '#3b82f6' }, // Adjusted dot color for light mode
      };
    case 'Approved':
      return {
        text: { ...baseTextStyle, color: theme === 'dark' ? '#fcd34d' : '#f59e0b' }, // Adjusted text color for light mode
        dot: { ...dotStyle, backgroundColor: theme === 'dark' ? '#fcd34d' : '#f59e0b' }, // Adjusted dot color for light mode
      };
    case 'Rejected':
      return {
        text: { ...baseTextStyle, color: theme === 'dark' ? '#fca5a5' : '#ef4444' }, // Adjusted text color for light mode
        dot: { ...dotStyle, backgroundColor: theme === 'dark' ? '#fca5a5' : '#ef4444' }, // Adjusted dot color for light mode
      };
    default:
      return {
        text: { ...baseTextStyle, color: theme === 'dark' ? '#d1d5db' : '#4b5563' },
        dot: { ...dotStyle, backgroundColor: theme === 'dark' ? '#d1d5db' : '#9ca3af' },
      };
  }
};

const OrdersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [sortColumn, setSortColumn] = useState<keyof Order | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ordersPerPage] = useState<number>(10); // Changed from 5 to 10
  const [isHeaderChecked, setIsHeaderChecked] = useState<boolean>(false);
  const [checkedRows, setCheckedRows] = useState<{[key: string]: boolean}>({ '#CM9804': true, '#CM9805': false });

  const { theme } = useTheme();

  const filteredOrders = useMemo(() => {
    let filtered = mockOrders;

    if (filterStatus !== 'All') {
      filtered = filtered.filter((order) => order.status === filterStatus);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortColumn) {
      filtered.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        }
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, filterStatus, sortColumn, sortDirection]);

  // Pagination logic
  const totalPages = 5; // Math.ceil(mockOrders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSort = (column: keyof Order) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div style={{ color: theme === 'dark' ? 'white' : '#1f2937' }}>
      <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', marginLeft: '30px' }}>Order List</h1>
      <div style={{ backgroundColor: theme === 'dark' ? '#1f2937' : 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: theme === 'dark' ? 'transparent' : '#F7F9FB', borderRadius: '8px', padding: '16px' }}>
          {/* Top left icons container */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={PlusImage} alt="Add" style={{ width: '24px', height: '24px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            <img src={BarsImage} alt="Filter" style={{ width: '24px', height: '24px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            <img src={ArrowsImage} alt="Sort" style={{ width: '24px', height: '24px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '65px' }}> {/* Adjusted gap and added marginRight */}
            <div style={{ position: 'relative', width: '160px' }}> {/* Reverted width for search bar */}
              <img src={MagnificationImage} alt="Search Icon" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
              <input
                type="text"
                placeholder="Search"
                style={{ padding: '8px 12px 8px 40px', border: `1px solid ${theme === 'dark' ? '#4b5563' : '#d1d5db'}`, borderRadius: '8px', backgroundColor: theme === 'dark' ? '#374151' : '#f9fafb', color: theme === 'dark' ? 'white' : '#1f2937', width: '100%' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Removed the select (All Statuses filter) element */}
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}> {/* Removed border and borderRadius */}
          <table style={{ minWidth: '100%', borderCollapse: 'collapse', borderSpacing: 0 }}>
            <thead style={{ backgroundColor: theme === 'dark' ? '#374151' : 'white', borderBottom: `1px solid ${theme === 'dark' ? '#4b5563' : '#e5e7eb'}` }}> {/* Moved borderBottom here */}
              <tr>
                <th style={{ padding: '12px 0px 12px 24px', textAlign: 'left' }}>
                  <input
                    type="checkbox"
                    checked={isHeaderChecked}
                    onChange={(e) => setIsHeaderChecked(e.target.checked)}
                    style={{ transform: 'scale(1.2)', accentColor: '#1C1C1C' }}
                  />
                </th>
                <th
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#d1d5db' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                  onClick={() => handleSort('id')}
                >
                  Order ID {sortColumn === 'id' && (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#d1d5db' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                  onClick={() => handleSort('user')}
                >
                  User {sortColumn === 'user' && (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#d1d5db' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                  onClick={() => handleSort('project')}
                >
                  Project {sortColumn === 'project' && (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#d1d5db' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                  onClick={() => handleSort('address')}
                >
                  Address {sortColumn === 'address' && (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#d1d5db' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                  onClick={() => handleSort('date')}
                >
                  Date {sortColumn === 'date' && (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? '#d1d5db' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                  onClick={() => handleSort('status')}
                >
                  Status {sortColumn === 'status' && (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: theme === 'dark' ? '#1f2937' : 'white' }}> {/* Removed borderBottom from tbody */}
              {currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <motion.tr
                    key={order.id}
                    whileHover={{ scale: 1.005, backgroundColor: theme === 'dark' ? '#4a5568' : 'white' }}
                    style={{ transition: 'all 0.2s ease-in-out' }}
                  >
                    <td style={{ padding: '16px 0px 16px 24px', whiteSpace: 'nowrap' }}>
                      {(order.id === '#CM9804' || order.id === '#CM9805') && (
                        <input
                          type="checkbox"
                          checked={checkedRows[order.id]}
                          onChange={(e) => setCheckedRows(prev => ({ ...prev, [order.id]: e.target.checked }))}
                          style={{ transform: 'scale(1.2)', accentColor: '#1C1C1C' }}
                        />
                      )}
                    </td>
                    <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px', fontWeight: '500', color: theme === 'dark' ? 'white' : '#1f2937' }}>{order.id}</td>
                    <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px', color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={(
                            (order.avatar === 'C1.svg' && C1Image) ||
                            (order.avatar === 'C2.svg' && C2Image) ||
                            (order.avatar === 'C3.svg' && C3Image) ||
                            (order.avatar === 'C4.svg' && C4Image) ||
                            (order.avatar === 'C5.svg' && C5Image) ||
                            (order.avatar === 'C6.svg' && C6Image) ||
                            ''
                          )}
                          alt={order.user}
                          style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '12px', objectFit: 'cover' }}
                        />
                        {order.user}
                      </div>
                    </td>
                    <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px', color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>{order.project}</td>
                    <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px', color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>{order.address}</td>
                    <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px', color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>{order.date}</td>
                    <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px' }}>
                      <span
                        style={getStatusStyles(order.status, theme).text}
                      >
                        <span style={getStatusStyles(order.status, theme).dot}></span>
                        {order.status}
                      </span>
                    </td>
                    {order.id === '#CM9805' && (
                      <td style={{ padding: '16px 16px', whiteSpace: 'nowrap', fontSize: '12px', color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>
                        ...
                      </td>
                    )}
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ padding: '16px 24px', textAlign: 'center', fontSize: '12px', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '24px', gap: '4px' }}> {/* Adjusted gap */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ 
              backgroundColor: 'transparent', 
              border: 'none', /* Removed border */
              borderRadius: '4px', 
              width: '32px', 
              height: '32px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: theme === 'dark' ? '#d1d5db' : '#1C1C1C', /* Adjusted color for light mode */
              fontSize: '16px', 
              cursor: 'pointer', 
              opacity: currentPage === 1 ? 0.5 : 1 
            }}
          >
            <img src={LeftImage} alt="Previous" style={{ width: '28px', height: '28px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const isSelected = pageNumber === currentPage;
            return (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                style={{
                  backgroundColor: isSelected ? (theme === 'dark' ? '#3b82f6' : '#E0E0E0') : 'transparent',
                  border: 'none', /* Removed border */
                  borderRadius: '4px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? (theme === 'dark' ? 'white' : '#1C1C1C') : (theme === 'dark' ? '#d1d5db' : '#1C1C1C'), /* Adjusted color for light mode */
                  fontSize: '14px',
                  fontWeight: isSelected ? '600' : '400',
                  cursor: 'pointer',
                }}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ 
              backgroundColor: 'transparent', 
              border: 'none', /* Removed border */
              borderRadius: '4px', 
              width: '32px', 
              height: '32px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: theme === 'dark' ? '#d1d5db' : '#1C1C1C', /* Adjusted color for light mode */
              fontSize: '16px', 
              cursor: 'pointer', 
              opacity: currentPage === totalPages ? 0.5 : 1 
            }}
          >
            <img src={RightImage} alt="Next" style={{ width: '28px', height: '28px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
