import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';
import ButtonImage from '../assets/images/Button.svg'; // Import Button.svg
import StarImage from '../assets/images/Star.svg'; // Import Star.svg
import MagnificationImage from '../assets/images/Magnification.svg'; // Import Magnification.svg
import TextImage from '../assets/images/Text.svg'; // Import Text.svg
import ModeImage from '../assets/images/Mode.svg'; // Import Mode.svg
import RefreshImage from '../assets/images/Refresh.svg'; // Import Refresh.svg
import BellImage from '../assets/images/Bell.svg'; // Import Bell.svg

interface NavbarProps {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleLeftSidebar, toggleRightSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <nav style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white', padding: '8px 55px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid #1C1C1C1A`, marginBottom: '0px' }}>
      {/* Left section: Icons and Breadcrumbs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button onClick={toggleLeftSidebar} style={{ color: isDarkMode ? 'white' : '#1f2937', backgroundColor: 'transparent', padding: '0', width: '28px', height: '28px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }} className="sidebar-toggle-button">
          <img src={ButtonImage} alt="Toggle Left Sidebar" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </button>
        {/* Removed document icon as per user instruction */}
        <button style={{ color: isDarkMode ? 'white' : '#1f2937', backgroundColor: 'transparent', padding: '0', width: '28px', height: '28px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
          <img src={StarImage} alt="Star Icon" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </button>
        <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: '14px' }}>Dashboards</span>
        <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: '14px' }}>/</span>
        <span style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '600', fontSize: '14px' }}>Default</span>
      </div>

      {/* Middle section: Profile pictures and notification number */}
      {/* This section is removed as per user instruction */}

      {/* Right section: Search bar and other icons */}
      <div className="navbar-controls-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '28px' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
              color: '#1C1C1C33',
              padding: '0 12px 0 36px', // Adjusted padding for 28px height
              borderRadius: '6px',
              border: 'none',
              outline: 'none',
              width: '160px', // Set width to 160px
              height: '28px', // Set height to 28px
            }}
          />
          <img
            src={MagnificationImage}
            alt="Search Icon"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '16px',
              height: '16px',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              filter: isDarkMode ? 'invert(1)' : 'none'
            }}
          />
          <img src={TextImage} alt="Text Icon" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: isDarkMode ? '#9ca3af' : '#6b7280', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </div>

        {/* Theme toggle button (Mode Icon) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          style={{ padding: '0', width: '28px', height: '28px', borderRadius: '9999px', backgroundColor: 'transparent', color: isDarkMode ? 'white' : '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}
        >
          <img src={ModeImage} alt="Theme Toggle" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </motion.button>

        {/* Refresh Button */}
        <button onClick={() => window.location.reload()} style={{ color: isDarkMode ? 'white' : '#1f2937', backgroundColor: 'transparent', padding: '0', width: '28px', height: '28px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
          <img src={RefreshImage} alt="Refresh Dashboard" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </button>

       

        {/* Bell Icon (now toggles Right Sidebar) */}
        <button onClick={toggleRightSidebar} style={{ color: isDarkMode ? 'white' : '#1f2937', backgroundColor: 'transparent', padding: '0', width: '28px', height: '28px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
          <img src={BellImage} alt="Bell Icon" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </button>

        {/* List Icon (Right Sidebar Toggle) - Now a placeholder */}
        <button onClick={toggleRightSidebar} style={{ color: isDarkMode ? 'white' : '#1f2937', backgroundColor: 'transparent', padding: '0', width: '28px', height: '28px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }} className="right-sidebar-toggle-button">
          <img src={ButtonImage} alt="Placeholder Icon" style={{ width: '28px', height: '28px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
