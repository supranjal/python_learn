import React from 'react';

const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100) || 0;

  return (
    <div style={styles.container}>
      <div style={styles.textWrapper}>
        <span style={styles.label}>Course Progress</span>
        <span style={styles.percentage}>{percentage}%</span>
      </div>
      <div style={styles.track}>
        <div 
          style={{
            ...styles.fill,
            width: `${percentage}%`
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
    marginBottom: '24px',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  label: {
    fontWeight: '600',
    color: 'var(--text-main)',
    fontSize: '0.95rem',
  },
  percentage: {
    fontWeight: '700',
    color: 'var(--primary)',
    fontSize: '1rem',
  },
  track: {
    height: '10px',
    backgroundColor: 'var(--bg-main)',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid var(--border-color)',
  },
  fill: {
    height: '100%',
    backgroundColor: 'var(--primary)',
    transition: 'width 0.8s ease-out',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
  }
};

export default ProgressBar;
