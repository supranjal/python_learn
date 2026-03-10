import React from 'react';

const LessonCard = ({ lesson, index, isCompleted, onClick }) => {
  return (
    <div 
      className="card" 
      style={styles.card}
      onClick={onClick}
    >
      <div style={styles.header}>
        <div style={styles.numberBadge}>
          {index + 1}
        </div>
        {isCompleted && (
          <div style={styles.completedBadge} title="Completed">
            ✓
          </div>
        )}
      </div>
      
      <h3 style={styles.title}>{lesson.title}</h3>
      <p style={styles.description}>
        {lesson.explanation.substring(0, 80)}...
      </p>
      
      <div style={styles.footer}>
        <button style={styles.startBtn}>
          {isCompleted ? 'Review Lesson' : 'Start Learning'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: '24px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  numberBadge: {
    backgroundColor: 'var(--primary-light)',
    color: 'var(--primary)',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '1.2rem',
  },
  completedBadge: {
    backgroundColor: 'var(--correct)',
    color: 'white',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    boxShadow: '0 2px 4px rgba(76, 175, 80, 0.4)',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '12px',
    color: 'var(--text-main)',
  },
  description: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    flex: 1,
    marginBottom: '20px',
  },
  footer: {
    marginTop: 'auto',
  },
  startBtn: {
    width: '100%',
    padding: '10px 0',
    backgroundColor: 'transparent',
    color: 'var(--primary)',
    border: '1px solid var(--primary)',
    borderRadius: 'var(--radius-sm)',
    fontWeight: '600',
  }
};

export default LessonCard;
