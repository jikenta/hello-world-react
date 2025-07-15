import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Click Counter App</h1>
      <p style={styles.counter}>Count: {count}</p>

      {count >= limit && (
        <p style={styles.warning}> You have reached the limit!</p>
        )}

      <div>
        <button style={styles.button} onClick={increase}>Increase</button>
        <button style={styles.button} onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial',
    color: '#333',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  counter: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  warning: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
  },
};

export default Counter;
