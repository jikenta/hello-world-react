import React, { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>Users List</h1>
      {loading && <p>Loading users...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {!loading && !error && (
        <ListComponent
          items={users}
          renderItem={user => (
            <div>
              <strong>{user.name}</strong> <br />
              <small>{user.email}</small>
            </div>
          )}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default App;
