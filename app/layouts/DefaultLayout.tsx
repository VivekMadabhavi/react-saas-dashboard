import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import RightSidebar from '../components/RightSidebar';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion'; // Reintroduce motion import for overlay

const DefaultLayout: React.FC = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true); // Left sidebar open by default
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true); // Right sidebar closed by default
  const { theme } = useTheme();
  const location = useLocation();
  const { pathname } = location;

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
    // Close right sidebar if left sidebar is opening on small screens
    if (!isLeftSidebarOpen && window.innerWidth < 768) {
      setIsRightSidebarOpen(false);
    }
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
    // Close left sidebar if right sidebar is opening on small screens
    if (!isRightSidebarOpen && window.innerWidth < 768) {
      setIsLeftSidebarOpen(false);
    }
  };

  // Calculate dynamic margins for main content
  const mainContentMarginLeft = isLeftSidebarOpen ? 180 : 0;
  const shouldShowRightSidebar = pathname !== '/orders';
  const mainContentMarginRight = shouldShowRightSidebar && isRightSidebarOpen ? 280 : 0; // Adjusted for new right sidebar width

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? '#1a202c' : '#f8f9fa',
        position: 'relative',
      }}
    >
      <Sidebar isOpen={isLeftSidebarOpen} toggleSidebar={toggleLeftSidebar} />

      {/* Overlay for small screens when either sidebar is open */}
      {(isLeftSidebarOpen || (shouldShowRightSidebar && isRightSidebarOpen)) && window.innerWidth < 768 && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 40,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsLeftSidebarOpen(false);
            setIsRightSidebarOpen(false);
          }}
        />
      )}

      <div
        className={`main-content-area`}
        style={{
          marginLeft: mainContentMarginLeft + 'px',
          marginRight: mainContentMarginRight + 'px',
        }}
      >
        <Navbar toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar} />
        <main
          style={{
            flex: 1,
            padding: '0px 33px 33px 33px', // Adjusted top padding to 0px
            overflowY: 'auto',
            backgroundColor: theme === 'dark' ? '#1a202c' : '#ffffff',
          }}
        >
          <Outlet />
        </main>
      </div>
      {shouldShowRightSidebar && (
        <RightSidebar isOpen={isRightSidebarOpen} toggleSidebar={toggleRightSidebar} />
      )}
    </div>
  );
};

export default DefaultLayout;
