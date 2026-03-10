import React, { useEffect, useState } from 'react';
import CodeExample from '../components/CodeExample';
import Quiz from '../components/Quiz';

const LessonPage = ({ lesson, nextLessonId, prevLessonId, onNavigate, onComplete }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowConfetti(false);
  }, [lesson.id]);

  const handleQuizComplete = (isCorrect) => {
    if (isCorrect) {
      onComplete(lesson.id);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div className="animate-fade-in" style={styles.page}>
      
      {showConfetti && (
        <div style={styles.confettiContainer}>
          <div className="confetti-piece" style={{backgroundColor: '#ff595e', left: '10%', animationDelay: '0s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#ffca3a', left: '20%', animationDelay: '0.2s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#8ac926', left: '30%', animationDelay: '0.4s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#1982c4', left: '40%', animationDelay: '0.1s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#6a4c93', left: '50%', animationDelay: '0.3s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#ff595e', left: '60%', animationDelay: '0.5s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#ffca3a', left: '70%', animationDelay: '0.2s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#8ac926', left: '80%', animationDelay: '0.4s'}}></div>
          <div className="confetti-piece" style={{backgroundColor: '#1982c4', left: '90%', animationDelay: '0.1s'}}></div>
        </div>
      )}

      {/* Lesson Content */}
      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          <div style={styles.badge}>Lesson</div>
          <h1 style={styles.title}>{lesson.title}</h1>
        </header>

        <section style={styles.explanationSection}>
          <p style={styles.explanation}>{lesson.explanation}</p>
        </section>

        <section style={styles.interactiveSection}>
          <h2 style={styles.sectionTitle}>Interactive Example</h2>
          <CodeExample 
            code={lesson.codeExample} 
            expectedOutput={lesson.expectedOutput} 
          />
        </section>

        <section style={styles.interactiveSection}>
          <Quiz 
            quizData={lesson.quiz} 
            lessonId={lesson.id}
            onComplete={handleQuizComplete}
          />
        </section>

        {/* Navigation Footer */}
        <footer style={styles.navigation}>
          <button 
            className="btn-secondary" 
            onClick={() => onNavigate(prevLessonId || 'home')}
          >
            ← {prevLessonId ? 'Previous Lesson' : 'Back to Home'}
          </button>
          
          {nextLessonId ? (
            <button 
              className="btn-primary" 
              onClick={() => onNavigate(nextLessonId)}
            >
              Next Lesson →
            </button>
          ) : (
            <button 
              className="btn-primary" 
              onClick={() => onNavigate('home')}
            >
              Finish Course 🏆
            </button>
          )}
        </footer>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
        }
        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 20px;
          top: -20px;
          opacity: 0;
          transform: rotate(0deg);
          animation: fall 3s ease-in forwards;
        }
        @keyframes fall {
          0% { top: -20px; transform: rotate(0deg) translateX(0); opacity: 1; }
          100% { top: 100vh; transform: rotate(720deg) translateX(100px); opacity: 0; }
        }
      `}} />
    </div>
  );
};

const styles = {
  page: {
    padding: '24px 40px',
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
  },
  confettiContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 1,
  },
  header: {
    marginBottom: '32px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'var(--primary-light)',
    color: 'var(--primary)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-main)',
    margin: 0,
    lineHeight: '1.2',
  },
  explanationSection: {
    backgroundColor: 'var(--bg-card)',
    padding: '24px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    marginBottom: '40px',
  },
  explanation: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--text-main)',
    margin: 0,
  },
  interactiveSection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-main)',
    marginBottom: '16px',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '60px',
    paddingTop: '24px',
    borderTop: '1px solid var(--border-color)',
  }
};

export default LessonPage;
