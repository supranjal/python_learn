import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage';
import { lessons } from './data/lessons';
import './index.css';

function App() {
  // State for Navigation and Progress
  const [currentView, setCurrentView] = useState('home');
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('python-tutorial-progress');
    return saved ? JSON.parse(saved) : [];
  });
  
  // State for Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('python-tutorial-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
    localStorage.setItem('python-tutorial-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Effect to save progress
  useEffect(() => {
    localStorage.setItem('python-tutorial-progress', JSON.stringify(progress));
  }, [progress]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navigateTo = (viewId) => {
    setCurrentView(viewId);
  };

  const handleStartCourse = () => {
    // Navigate to the first uncompleted lesson, or the first lesson if all completed
    const firstUncompleted = lessons.find(l => !progress.includes(l.id));
    navigateTo(firstUncompleted ? firstUncompleted.id : lessons[0].id);
  };

  const markLessonComplete = (lessonId) => {
    if (!progress.includes(lessonId)) {
      setProgress([...progress, lessonId]);
    }
  };

  const renderContent = () => {
    if (currentView === 'home') {
      return (
        <Home 
          lessons={lessons} 
          progress={progress}
          onStartCourse={handleStartCourse}
          onNavigate={navigateTo}
        />
      );
    }

    // Render Lesson
    const lessonIndex = lessons.findIndex(l => l.id === currentView);
    if (lessonIndex !== -1) {
      const lesson = lessons[lessonIndex];
      const nextLessonId = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1].id : null;
      const prevLessonId = lessonIndex > 0 ? lessons[lessonIndex - 1].id : null;

      return (
        <LessonPage 
          lesson={lesson}
          nextLessonId={nextLessonId}
          prevLessonId={prevLessonId}
          onNavigate={navigateTo}
          onComplete={markLessonComplete}
        />
      );
    }

    return <div>Page Not Found</div>;
  };

  return (
    <div className="app-layout" style={styles.appLayout}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <div style={styles.mainContainer} className="container">
        {currentView !== 'home' && (
          <div style={styles.sidebarWrapper}>
            <Sidebar 
              lessons={lessons}
              currentLessonId={currentView}
              onSelectLesson={navigateTo}
              progress={progress}
            />
          </div>
        )}
        
        <main style={currentView === 'home' ? styles.fullWidthMain : styles.contentMain}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

const styles = {
  appLayout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    paddingTop: '32px',
    paddingBottom: '32px',
    gap: '32px',
    alignItems: 'flex-start',
  },
  sidebarWrapper: {
    flexShrink: 0,
    display: 'block',
  },
  contentMain: {
    flex: 1,
    minWidth: 0,
    backgroundColor: 'var(--bg-main)',
  },
  fullWidthMain: {
    flex: 1,
    width: '100%',
  }
};

export default App;
