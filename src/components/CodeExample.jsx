import React, { useState } from 'react';

const CodeExample = ({ code, expectedOutput }) => {
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    // Simulate slight delay for running the code
    setTimeout(() => {
      setOutput(expectedOutput);
      setIsRunning(false);
    }, 400);
  };

  return (
    <div style={styles.container} className="card">
      <div style={styles.header}>
        <div style={styles.dots}>
          <div style={{...styles.dot, backgroundColor: '#ff5f56'}} />
          <div style={{...styles.dot, backgroundColor: '#ffbd2e'}} />
          <div style={{...styles.dot, backgroundColor: '#27c93f'}} />
        </div>
        <div style={styles.title}>example.py</div>
        <button 
          onClick={handleRun} 
          style={styles.runButton}
          disabled={isRunning}
        >
          {isRunning ? 'Running...' : 'Run Code ▶'}
        </button>
      </div>
      
      <div style={styles.codeBlock}>
        <pre style={styles.pre}>
          <code>{code}</code>
        </pre>
      </div>
      
      {(output || isRunning) && (
        <div style={styles.outputSection} className="animate-fade-in">
          <div style={styles.outputHeader}>Terminal Output:</div>
          <div style={styles.terminal}>
            {isRunning ? (
              <span style={styles.runningText}>Executing...</span>
            ) : (
              <pre style={styles.outputText}>{output}</pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '24px 0',
    overflow: 'hidden',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
  },
  header: {
    backgroundColor: 'var(--term-header)',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #1a1a1a',
  },
  dots: {
    display: 'flex',
    gap: '6px',
    width: '60px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  title: {
    color: '#a0a0a0',
    fontSize: '0.85rem',
    fontFamily: 'monospace',
    letterSpacing: '0.5px',
  },
  runButton: {
    backgroundColor: 'var(--primary)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.85rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  codeBlock: {
    backgroundColor: 'var(--term-bg)',
    padding: '20px',
    overflowX: 'auto',
  },
  pre: {
    margin: 0,
    color: '#e6e6e6',
    fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
    fontSize: '0.95rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
  },
  outputSection: {
    backgroundColor: 'var(--bg-main)',
    borderTop: '1px solid var(--border-color)',
  },
  outputHeader: {
    padding: '12px 16px',
    fontWeight: '600',
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    borderBottom: '1px solid var(--border-color)',
  },
  terminal: {
    backgroundColor: '#000000',
    padding: '16px',
    minHeight: '80px',
  },
  outputText: {
    color: 'var(--term-text)',
    fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
    margin: 0,
    fontSize: '0.95rem',
    whiteSpace: 'pre-wrap',
  },
  runningText: {
    color: '#888',
    fontFamily: 'monospace',
    fontStyle: 'italic',
  }
};

export default CodeExample;
