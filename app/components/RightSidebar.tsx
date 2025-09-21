import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion'; // Import motion
import N1Image from '../assets/images/N1.svg';
import N2Image from '../assets/images/N2.svg';
import N3Image from '../assets/images/N3.svg';
import N4Image from '../assets/images/N4.svg';
import A1Image from '../assets/images/A1.svg';
import A2Image from '../assets/images/A2.svg';
import A3Image from '../assets/images/A3.svg';
import A4Image from '../assets/images/A4.svg';
import A5Image from '../assets/images/A5.svg';
import C1Image from '../assets/images/C1.svg';
import C2Image from '../assets/images/C2.svg';
import C3Image from '../assets/images/C3.svg';
import C4Image from '../assets/images/C4.svg';
import C5Image from '../assets/images/C5.svg';
import C6Image from '../assets/images/C6.svg';

interface RightSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const sectionTitleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: isDarkMode ? 'white' : '#1f2937',
    marginBottom: '16px',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Changed to flex-start for top alignment of icon and text
    marginBottom: '16px', // Adjusted margin-bottom
    fontSize: '14px',
    color: isDarkMode ? '#d1d5db' : '#4b5563',
    position: 'relative' as 'relative', // Add relative positioning for absolute children
  } as React.CSSProperties;

  const notificationIconContainerStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: isDarkMode ? '#374151' : '#e0f2fe', // Light blue background for light mode
    border: isDarkMode ? '1px solid #4b5563' : '1px solid #bfdbfe', // Light blue border
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    flexShrink: 0, // Prevent icon container from shrinking
  } as React.CSSProperties;

  const notificationIconStyle = {
    width: '20px',
    height: '20px',
    color: isDarkMode ? '#9ca3af' : '#3b82f6', // Darker blue icon color
  } as React.CSSProperties;

  const activitiesAvatarStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    marginRight: '12px', // Add margin-right to create space
  } as React.CSSProperties;

  const contactsImageAvatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    marginRight: '12px',
  } as React.CSSProperties;

  return (
    <motion.div
      className="right-sidebar-container"
      initial={{ x: 280 }} // Initial state: hidden (off-screen right)
      animate={{ x: isOpen ? 0 : 280 }} // Animate to visible or hidden based on isOpen, adjusted for new width
      transition={{ duration: 0.3 }} // Smooth transition
      style={{
        width: '280px',
        padding: '24px',
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        color: isDarkMode ? 'white' : '#1f2937',
        overflowY: 'auto', // Re-enable scrolling
        borderLeft: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
        position: 'fixed', // Ensure it's fixed for sliding
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 49,
      }}
    >
      {/* Notifications */}
      <h2 style={{...sectionTitleStyle, marginBottom: '24px'}}>Notifications</h2>
      <div style={{ marginBottom: '32px' }}>
        <div style={itemStyle}>
          <div style={notificationIconContainerStyle}>
            <img src={N1Image} alt="Notification 1" style={{ ...notificationIconStyle, filter: isDarkMode ? 'invert(1)' : 'none' }} />
          </div>
          <div>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>You have a bug that needs...</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Just now</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={notificationIconContainerStyle}>
            <img src={N2Image} alt="Notification 2" style={{ ...notificationIconStyle, filter: isDarkMode ? 'invert(1)' : 'none' }} />
          </div>
          <div>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>New user registered</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>59 minutes ago</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={notificationIconContainerStyle}>
            <img src={N3Image} alt="Notification 3" style={{ ...notificationIconStyle, filter: isDarkMode ? 'invert(1)' : 'none' }} />
          </div>
          <div>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>You have a bug that needs...</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>12 hours ago</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={notificationIconContainerStyle}>
            <img src={N4Image} alt="Notification 4" style={{ ...notificationIconStyle, filter: isDarkMode ? 'invert(1)' : 'none' }} />
          </div>
          <div>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>Andi Lane subscribed to you</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Today, 11:59 AM</div>
          </div>
        </div>
      </div>

      {/* Activities */}
      <h2 style={{...sectionTitleStyle, marginBottom: '24px'}}>Activities</h2>
      <div style={{ marginBottom: '32px', position: 'relative' }}>
        {/* Vertical timeline line */}
        <div style={{ position: 'absolute', left: '18px', top: '0', height: '226px', width: '1px', backgroundColor: isDarkMode ? '#4b5563' : '#e5e7eb' }} />

        <div style={itemStyle}>
          <div style={activitiesAvatarStyle}>
            <img src={A1Image} alt="Activity 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ /* marginLeft: '40px' */ }}>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>You have a bug that needs...</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Just now</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={activitiesAvatarStyle}>
            <img src={A2Image} alt="Activity 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ /* marginLeft: '40px' */ }}>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>Released a new version</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>59 minutes ago</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={activitiesAvatarStyle}>
            <img src={A3Image} alt="Activity 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ /* marginLeft: '40px' */ }}>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>Submitted a bug</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>12 hours ago</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={activitiesAvatarStyle}>
            <img src={A4Image} alt="Activity 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ /* marginLeft: '40px' */ }}>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>Modified A data in Page X</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Today, 11:59 AM</div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={activitiesAvatarStyle}>
            <img src={A5Image} alt="Activity 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ /* marginLeft: '40px' */ }}>
            <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginBottom: '4px', fontSize: '14px' }}>Deleted a page in Project X</div>
            <div style={{ fontSize: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Feb 2, 2023</div>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <h2 style={{...sectionTitleStyle, marginBottom: '24px'}}>Contacts</h2>
      <div>
        <div style={itemStyle}>
          <div style={contactsImageAvatarStyle}>
            <img src={C1Image} alt="Contact 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginLeft: '12px', fontSize: '14px' }}>Natali Craig</div>
        </div>
        <div style={itemStyle}>
          <div style={contactsImageAvatarStyle}>
            <img src={C2Image} alt="Contact 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginLeft: '12px', fontSize: '14px' }}>Drew Cano</div>
        </div>
        <div style={itemStyle}>
          <div style={contactsImageAvatarStyle}>
            <img src={C3Image} alt="Contact 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginLeft: '12px', fontSize: '14px' }}>Orlando Diggs</div>
        </div>
        <div style={itemStyle}>
          <div style={contactsImageAvatarStyle}>
            <img src={C4Image} alt="Contact 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginLeft: '12px', fontSize: '14px' }}>Andi Lane</div>
        </div>
        <div style={itemStyle}>
          <div style={contactsImageAvatarStyle}>
            <img src={C5Image} alt="Contact 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginLeft: '12px', fontSize: '14px' }}>Kate Morrison</div>
        </div>
        <div style={itemStyle}>
          <div style={contactsImageAvatarStyle}>
            <img src={C6Image} alt="Contact 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ color: isDarkMode ? 'white' : '#1f2937', fontWeight: '500', marginLeft: '12px', fontSize: '14px' }}>Koray Okumus</div>
        </div>
      </div>
    </motion.div>
  );
};

export default RightSidebar;