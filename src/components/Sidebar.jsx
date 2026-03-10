import React from 'react';

const Sidebar = ({ lessons, currentLessonId, onSelectLesson, progress }) => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>
        <h3 style={styles.title}>Modules</h3>
      </div>
      <ul style={styles.list}>
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === currentLessonId;
          const isCompleted = progress.includes(lesson.id);
          
          return (
            <li key={lesson.id} style={styles.item}>
              <button
                style={{
                  ...styles.button,
                  ...(isCurrent ? styles.activeButton : {}),
                }}
                onClick={() => onSelectLesson(lesson.id)}
              >
                <div style={styles.lessonInfo}>
                  <span style={styles.number}>{index + 1}.</span>
                  <span style={styles.lessonTitle}>{lesson.title}</span>
                </div>
                {isCompleted && (
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--primary)" strokeWidth="3" fill="none" style={styles.checkIcon}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '280px',
    backgroundColor: 'var(--bg-card)',
    borderRight: '1px solid var(--border-color)',
    height: 'calc(100vh - 65px)',
    position: 'sticky',
    top: '65px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid var(--border-color)',
  },
  title: {
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '700',
    color: 'var(--text-muted)',
    margin: 0,
  },
  list: {
    listStyle: 'none',
    padding: '12px',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  item: {
    margin: 0,
  },
  button: {
    width: '100%',
    textAlign: 'left',
    padding: '12px 16px',
    borderRadius: 'var(--radius-sm)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--text-main)',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  activeButton: {
    backgroundColor: 'var(--primary-light)',
    color: 'var(--primary)',
    fontWeight: '600',
  },
  lessonInfo: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  number: {
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
  },
  lessonTitle: {
    fontSize: '0.95rem',
  },
  checkIcon: {
    flexShrink: 0,
  }
};

export default Sidebar;
