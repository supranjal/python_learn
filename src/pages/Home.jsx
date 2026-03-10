import React from 'react';
import LessonCard from '../components/LessonCard';
import ProgressBar from '../components/ProgressBar';

const Home = ({ lessons, progress, onStartCourse, onNavigate }) => {
  return (
    <div className="container animate-fade-in" style={styles.page}>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Master <span style={styles.highlight}>Python</span> Interactively
          </h1>
          <p style={styles.heroSubtitle}>
            Learn Python from scratch with our hands-on tutorials. 
            Read lessons, write real code, and test your knowledge through quizzes.
          </p>
          <button className="btn-primary" style={styles.cta} onClick={onStartCourse}>
            {progress.length > 0 ? 'Continue Learning' : 'Start Learning Now'}
          </button>
        </div>
        <div style={styles.heroGraphic}>
          <div style={styles.graphicCard}>
            <pre style={styles.codeSnippet}>
              <span style={{color: '#ff79c6'}}>def</span> <span style={{color: '#50fa7b'}}>learn_python</span>():
              <br/>    <span style={{color: '#8be9fd', fontStyle: 'italic'}}>return</span> <span style={{color: '#f1fa8c'}}>"Easy and Fun!"</span>
              <br/><br/>
              <span style={{color: '#8be9fd'}}>print</span>(learn_python())
            </pre>
          </div>
        </div>
      </section>
      
      {/* Progress Section */}
      {progress.length > 0 && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Learning Journey</h2>
          <ProgressBar current={progress.length} total={lessons.length} />
        </section>
      )}
      
      {/* Course Modules Grid */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Course Modules</h2>
          <span style={styles.moduleCount}>{lessons.length} Lessons</span>
        </div>
        
        <div style={styles.grid}>
          {lessons.map((lesson, index) => (
            <LessonCard 
              key={lesson.id} 
              lesson={lesson} 
              index={index} 
              isCompleted={progress.includes(lesson.id)}
              onClick={() => onNavigate(lesson.id)}
            />
          ))}
        </div>
      </section>
      
    </div>
  );
};

const styles = {
  page: {
    padding: '40px 0 80px',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    marginBottom: '60px',
    backgroundColor: 'var(--bg-card)',
    padding: '40px',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-color)',
  },
  heroContent: {
    flex: 1,
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: 'var(--text-main)',
  },
  highlight: {
    color: 'var(--primary)',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    marginBottom: '32px',
    maxWidth: '500px',
    lineHeight: '1.6',
  },
  cta: {
    fontSize: '1.1rem',
    padding: '14px 32px',
  },
  heroGraphic: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  graphicCard: {
    backgroundColor: '#282a36',
    padding: '24px',
    borderRadius: 'var(--radius-md)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    transform: 'rotate(2deg)',
    transition: 'transform 0.3s ease',
    width: '100%',
    maxWidth: '400px',
  },
  codeSnippet: {
    fontFamily: "'Fira Code', monospace",
    color: '#f8f8f2',
    fontSize: '1.05rem',
    lineHeight: '1.5',
    margin: 0,
  },
  section: {
    marginBottom: '60px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'var(--text-main)',
  },
  moduleCount: {
    color: 'var(--text-muted)',
    fontWeight: '600',
    backgroundColor: 'var(--bg-card)',
    padding: '4px 12px',
    borderRadius: '20px',
    border: '1px solid var(--border-color)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  }
};

export default Home;
