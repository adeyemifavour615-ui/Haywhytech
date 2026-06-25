import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.page}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to your dashboard</h1>
      </div>
    </div>
  );
};

const styles = {
  page: {
    width: '100%',
    maxWidth: '600px',
    padding: '48px 28px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
    color: '#111827',
  },
  content: {
    textAlign: 'center',
  },
  label: {
    margin: 0,
    color: '#6b7280',
    fontSize: '14px',
  },
  title: {
    margin: '12px 0 8px',
    fontSize: '2.5rem',
    lineHeight: 1.05,
  },
  subtitle: {
    margin: '0 0 24px',
    color: '#4b5563',
    fontSize: '16px',
  },
  logoutButton: {
    border: '1px solid #d1d5db',
    backgroundColor: '#f9fafb',
    color: '#111827',
    borderRadius: '9999px',
    padding: '10px 22px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default Dashboard;
