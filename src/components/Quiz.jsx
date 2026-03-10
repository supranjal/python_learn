import React, { useState, useEffect } from 'react';

const Quiz = ({ quizData, onComplete, lessonId }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  // Reset quiz state when lesson changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [lessonId]);

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === quizData.correctAnswer;
    if (isCorrect) {
      // Simulate slight delay before notifying parent to show completion
      setTimeout(() => {
        onComplete(true);
      }, 1000);
    }
  };

  return (
    <div style={styles.container} className="card">
      <div style={styles.header}>
        <h3 style={styles.title}>Test Your Knowledge</h3>
        <span style={styles.badge}>Quiz</span>
      </div>
      
      <div style={styles.content}>
        <p style={styles.question}>{quizData.question}</p>
        
        <div style={styles.optionsList}>
          {quizData.options.map((option, index) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === quizData.correctAnswer;
            let buttonStyle = { ...styles.optionButton };
            let icon = null;
            
            if (isAnswered) {
              if (isCorrect) {
                 buttonStyle = { ...buttonStyle, ...styles.correctOption };
                 icon = "✓";
              } else if (isSelected && !isCorrect) {
                 buttonStyle = { ...buttonStyle, ...styles.incorrectOption };
                 icon = "✗";
              }
            } else if (isSelected) {
              buttonStyle = { ...buttonStyle, borderColor: 'var(--primary)' };
            }

            return (
              <button
                key={index}
                style={buttonStyle}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
                className={isAnswered && isCorrect ? 'animate-pulse' : (isAnswered && isSelected && !isCorrect ? 'animate-shake' : '')}
              >
                <div style={styles.optionContent}>
                  <span style={styles.optionText}>{option}</span>
                  {icon && (
                    <span style={isCorrect ? styles.correctIcon : styles.incorrectIcon}>
                      {icon}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {isAnswered && (
          <div style={{
            ...styles.feedbackSection,
            backgroundColor: selectedOption === quizData.correctAnswer ? 'var(--primary-light)' : '#ffebee',
            color: selectedOption === quizData.correctAnswer ? 'var(--primary)' : 'var(--incorrect)'
          }} className="animate-fade-in">
            <h4 style={styles.feedbackTitle}>
              {selectedOption === quizData.correctAnswer ? '🎉 Correct!' : '❌ Incorrect!'}
            </h4>
            <p style={styles.feedbackText}>
              {selectedOption === quizData.correctAnswer 
                ? 'Great job! You can proceed to the next lesson.' 
                : 'Review the material and try again!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '32px 0',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'var(--bg-main)',
    padding: '16px 24px',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-main)',
  },
  badge: {
    backgroundColor: 'var(--primary)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  content: {
    padding: '24px',
  },
  question: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: 'var(--text-main)',
  },
  optionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  optionButton: {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    backgroundColor: 'var(--bg-card)',
    border: '2px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    fontSize: '1rem',
    color: 'var(--text-main)',
    transition: 'all 0.2s',
    cursor: 'pointer',
    position: 'relative',
  },
  optionContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontWeight: '500',
  },
  correctOption: {
    backgroundColor: 'var(--primary-light)',
    borderColor: 'var(--correct)',
    color: 'var(--correct)',
  },
  incorrectOption: {
    backgroundColor: '#ffebee',
    borderColor: 'var(--incorrect)',
    color: 'var(--incorrect)',
  },
  correctIcon: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'var(--correct)',
  },
  incorrectIcon: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'var(--incorrect)',
  },
  feedbackSection: {
    marginTop: '24px',
    padding: '16px',
    borderRadius: 'var(--radius-sm)',
    textAlign: 'center',
  },
  feedbackTitle: {
    margin: '0 0 8px 0',
    fontSize: '1.2rem',
  },
  feedbackText: {
    margin: 0,
    fontSize: '0.95rem',
  }
};

export default Quiz;
