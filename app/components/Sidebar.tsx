import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; // Reintroduce motion import
import { useTheme } from '../hooks/useTheme';
import ProfileMain from '../assets/images/ProfileMain.svg';
import DefaultImage from '../assets/images/Default.svg';
import ECommerceImage from '../assets/images/eCommerce.svg';
import OrderListImage from '../assets/images/OrderList.svg';
import OnlineCImage from '../assets/images/OnlineC.svg';
import UserPImage from '../assets/images/UserP.svg';
import IdentificationCardImage from '../assets/images/IdentificationCard.svg';
import UsersThreeImage from '../assets/images/UsersThree.svg';
import BlogImage from '../assets/images/Blog.svg';
import SocialImage from '../assets/images/Social.svg';

interface SidebarProps {
  isOpen: boolean; // Reintroduce isOpen prop
  toggleSidebar: () => void; // Reintroduce toggleSidebar prop
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  // sidebarClass will only handle theme-related background colors. Positioning via motion.div
  const sidebarClass = `sidebar-container ${isDarkMode ? 'dark-sidebar-bg' : 'light-sidebar-bg'}`;

  const linkStyles = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px', // Adjusted padding from 10px to 8px
    borderRadius: '6px', // Adjusted border radius
    transition: 'background-color 0.2s ease-in-out',
    color: isActive ? (isDarkMode ? 'white' : '#1f2937') : (isDarkMode ? '#9ca3af' : '#6b7280'), // Adjusted text color (dark for light mode active)
    backgroundColor: isActive ? (isDarkMode ? '#374151' : '#f3f4f6') : 'transparent',
    fontWeight: isActive ? '600' : 'normal',
    fontSize: '14px', // Set font size to 14px
    position: 'relative' as 'relative',
    marginBottom: '0px', // Adjusted margin-bottom to 0px
    textDecoration: 'none', // Remove underline
  }) as React.CSSProperties;

  const activeIndicatorStyle = {
    position: 'absolute' as 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '2px', // Adjusted width to 2px
    height: '70%', // Adjusted height
    backgroundColor: '#1f2937', // Changed from #2563eb (blue) to black
    borderRadius: '0 2px 2px 0',
  } as React.CSSProperties;

  return (
    <motion.div
      className={sidebarClass}
      initial={{ x: -180 }} // Initial state: hidden
      animate={{ x: isOpen ? 0 : -180 }} // Animate to visible or hidden based on isOpen
      transition={{ duration: 0.3 }} // Smooth transition
      style={{
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        color: isDarkMode ? 'white' : '#1f2937',
        padding: '16px',
        // Positioning handled by motion.div and CSS now
        position: 'fixed' as 'fixed', // Ensure it's fixed for sliding
        top: 0,
        bottom: 0,
        width: '180px',
        zIndex: 50,
        borderRight: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      } as React.CSSProperties}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '0', marginBottom: '12px' }}>
        {/* Profile Picture and ByeWind Text */}
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', overflow: 'hidden' }}>
          <img src={ProfileMain} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isDarkMode ? 'invert(1)' : 'none' }} />
        </div>
        <h1 style={{ fontSize: '14px', fontWeight: '600', color: isDarkMode ? 'white' : '#1f2937', lineHeight: 'normal', paddingLeft: '0px' }}>ByeWind</h1>
      </div>

      <nav style={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', marginBottom: '0px', gap: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: '600', color: isDarkMode ? 'white' : '#1C1C1C66' }}>Favorites</h2>
          <h2 style={{ fontSize: '14px', fontWeight: '600', color: isDarkMode ? '#d1d5db' : '#1C1C1C33' }}>Recently</h2>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '0px' }}>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/overview-fav" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isDarkMode ? '#6b7280' : '#1C1C1C33', marginRight: '10px', display: isActive ? 'none' : 'block' }} />
                  Overview
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/projects-fav" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isDarkMode ? '#6b7280' : '#1C1C1C33', marginRight: '10px', display: isActive ? 'none' : 'block' }} />
                  Projects
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Dashboards Section */}
        <h2 style={{ fontSize: '14px', fontWeight: '600', color: isDarkMode ? '#d1d5db' : '#9ca3af', padding: '0 16px', marginBottom: '8px' }}>Dashboards</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '12px' }}>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={DefaultImage} alt="Default Dashboard" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Default
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/ecommerce" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={ECommerceImage} alt="eCommerce Dashboard" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  eCommerce
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/orders" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={OrderListImage} alt="Orders List" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Orders List
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/projects-dash" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={OnlineCImage} alt="Online Courses" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Online Courses
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Pages Section */}
        <h2 style={{ fontSize: '14px', fontWeight: '600', color: isDarkMode ? '#d1d5db' : '#9ca3af', padding: '0 16px', marginBottom: '8px' }}>Pages</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '12px' }}>
          <li style={{ marginBottom: '0px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 12px',
                borderRadius: '6px',
                transition: 'background-color 0.2s ease-in-out',
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                fontWeight: 'normal',
                fontSize: '14px', // Added font size
                position: 'relative',
                marginBottom: '4px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <img src={UserPImage} alt="User Profile" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
              User Profile
            </div>
            {/* Sub-links */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: '28px', marginTop: '4px' }}>
              <NavLink to="/profile-overview" style={({ isActive: isSubActive }) => ({ textDecoration: 'none', color: isSubActive ? (isDarkMode ? 'white' : '#1f2937') : (isDarkMode ? '#9ca3af' : '#6b7280'), padding: '8px 0', backgroundColor: 'transparent', marginBottom: '0px', fontSize: '14px' })} >Overview</NavLink>
              <NavLink to="/profile-projects" style={({ isActive: isSubActive }) => ({ textDecoration: 'none', color: isSubActive ? (isDarkMode ? 'white' : '#1f2937') : (isDarkMode ? '#9ca3af' : '#6b7280'), padding: '8px 0', backgroundColor: 'transparent', marginBottom: '0px', fontSize: '14px' })} >Projects</NavLink>
              <NavLink to="/profile-campaigns" style={({ isActive: isSubActive }) => ({ textDecoration: 'none', color: isSubActive ? (isDarkMode ? 'white' : '#1f2937') : (isDarkMode ? '#9ca3af' : '#6b7280'), padding: '8px 0', backgroundColor: 'transparent', marginBottom: '0px', fontSize: '14px' })} >Campaigns</NavLink>
              <NavLink to="/profile-documents" style={({ isActive: isSubActive }) => ({ textDecoration: 'none', color: isSubActive ? (isDarkMode ? 'white' : '#1f2937') : (isDarkMode ? '#9ca3af' : '#6b7280'), padding: '8px 0', backgroundColor: 'transparent', marginBottom: '0px', fontSize: '14px' })} >Documents</NavLink>
              <NavLink to="/profile-followers" style={({ isActive: isSubActive }) => ({ textDecoration: 'none', color: isSubActive ? (isDarkMode ? 'white' : '#1f2937') : (isDarkMode ? '#9ca3af' : '#6b7280'), padding: '8px 0', backgroundColor: 'transparent', marginBottom: '0px', fontSize: '14px' })} >Followers</NavLink>
            </div>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/account" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#6b7280' : '#9ca3af', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={IdentificationCardImage} alt="Account" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Account
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/corporate" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#6b7280' : '#9ca3af', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={UsersThreeImage} alt="Corporate" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Corporate
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/blog" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#6b7280' : '#9ca3af', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={BlogImage} alt="Blog" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Blog
                </>
              )}
            </NavLink>
          </li>
          <li style={{ marginBottom: '0px' }}>
            <NavLink to="/social" style={({ isActive }) => ({ ...linkStyles(isActive) })} >
              {({ isActive }) => (
                <>
                  {isActive && <div style={activeIndicatorStyle} />}
                  <svg style={{ width: '14px', height: '14px', marginRight: '4px', color: isDarkMode ? '#6b7280' : '#9ca3af', display: isActive ? 'none' : 'block' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  <img src={SocialImage} alt="Social" style={{ width: '18px', height: '18px', marginRight: '10px', filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  Social
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
