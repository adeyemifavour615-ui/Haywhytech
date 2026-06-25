import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './dashboard';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginSuccess = (email) => {
    setLoggedInUser(email);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div style={styles.container}>
      {loggedInUser ? (
        <Dashboard userEmail={loggedInUser} onLogout={handleLogout} />
      ) : (
        <>
          
          <div style={styles.formWrapper}>
            {isLogin ? (
              <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
              <Register />
            )}
          </div>

          <div style={styles.toggleContainer}>
            <span style={styles.toggleText}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              style={styles.toggleButton}
            >
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '40px 20px',
    backgroundColor: '#ffffff', // Pure white background across the screen
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    color: '#333333'
  },
  heading: { marginBottom: '20px', color: '#333' },
  formWrapper: { width: '100%', display: 'flex', justifyContent: 'center' },
  toggleContainer: { marginTop: '20px', textAlign: 'center' },
  toggleText: { color: '#666', fontSize: '14px', marginRight: '8px' },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: 0
  }
};

export default App;