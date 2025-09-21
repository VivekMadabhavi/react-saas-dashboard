import React from 'react';
import DashboardCard from '../components/DashboardCard';
import ProjectionsVsActualsChart from '../components/ProjectionsVsActualsChart';
import RevenueTrendChart from '../components/RevenueTrendChart';
import RevenueByLocation from '../components/RevenueByLocation';
import TopSellingProducts from '../components/TopSellingProducts';
import TotalSalesChart from '../components/TotalSalesChart';
import { useTheme } from '../hooks/useTheme';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const dashboardData = {
    customers: {
      value: "3,781",
      percentage: "+11.01%",
      isPositive: true,
    },
    orders: {
      value: "1,219",
      percentage: "-0.03%",
      isPositive: false,
    },
    revenue: {
      value: "$695",
      percentage: "+15.03%",
      isPositive: true,
    },
    growth: {
      value: "30.1%",
      percentage: "+6.08%",
      isPositive: true,
    },
  };

  const cardContainerStyle = {
    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  const lightCardContainerStyle = {
    backgroundColor: theme === 'dark' ? '#374151' : '#F5F7FA',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{ color: theme === 'dark' ? 'white' : '#1f2937', padding: '0 28px' }}>
      <h1 style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '15px', marginBottom: '16px', color: theme === 'dark' ? 'white' : '#1f2937' }}>eCommerce</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '28px', marginBottom: '28px' }}>
        {/* Left Column: 2x2 grid of DashboardCards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
          <DashboardCard
            title="Customers"
            value={dashboardData.customers.value}
            percentage={dashboardData.customers.percentage}
            isPositive={dashboardData.customers.isPositive}
            style={{ backgroundColor: theme === 'dark' ? '#374151' : '#E5ECF6', padding: '20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          />
          <DashboardCard
            title="Orders"
            value={dashboardData.orders.value}
            percentage={dashboardData.orders.percentage}
            isPositive={dashboardData.orders.isPositive}
            style={cardContainerStyle}
          />
          <DashboardCard
            title="Revenue"
            value={dashboardData.revenue.value}
            percentage={dashboardData.revenue.percentage}
            isPositive={dashboardData.revenue.isPositive}
            style={cardContainerStyle}
          />
          <DashboardCard
            title="Growth"
            value={dashboardData.growth.value}
            percentage={dashboardData.growth.percentage}
            isPositive={dashboardData.growth.isPositive}
            style={{ backgroundColor: theme === 'dark' ? '#374151' : '#E5ECF6', padding: '20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          />
        </div>

        {/* Right Column: ProjectionsVsActualsChart */}
        <div style={cardContainerStyle}>
          <ProjectionsVsActualsChart />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '28px', marginBottom: '28px' }}>
        <div style={cardContainerStyle}>
          <RevenueTrendChart />
        </div>
        
        <div style={cardContainerStyle}>
          <RevenueByLocation />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '28px', marginBottom: '28px' }}>
        <div style={cardContainerStyle}>
          <TopSellingProducts />
        </div>
        <div style={cardContainerStyle}>
          <TotalSalesChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
