import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
  
    const handleLogin = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Perform login logic
      // If login is successful, navigate to the dashboard page
      // For demonstration purposes, always redirect to dashboard
      history.push('/dashboard');
    };
  
    return (
      <div className="container">
        <div className="form-container" id="formContainer">
          {/* Login Form */}
          <form id="loginForm" className="form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

export default Login;
