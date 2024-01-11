// // LoginModal.js
// import React, { useState } from 'react';
// import './Login.css';

// const LoginModal = ({ isOpen, onClose }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add your authentication logic here
//     console.log('Logging in with:', { username, password });
//     // Close the modal after successful login
//     onClose();
//   };

//   return (
//     <div className={`login-modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Login</h2>
//         <form>
//           <label>Username:
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </label>
//           <label>Password:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <button type="button" onClick={handleLogin}>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;





// LoginModal.js
import React, { useState } from 'react';
import './Login.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginMode, setLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleToggleMode = () => {
    setLoginMode(!isLoginMode);
  };

  const handleAuthentication = () => {
    if (isLoginMode) {
      // Login logic
      console.log('Logging in with:', { username, password });
    } else {
      // Registration logic
      console.log('Registering with:', { username, password, email });
    }

    // Close the modal after authentication
    onClose();
  };

  return (
    <div className={`login-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          {!isLoginMode && (
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          )}
          <button type="button" onClick={handleAuthentication}>
            {isLoginMode ? 'Login' : 'Register'}
          </button>
        </form>
        <p onClick={handleToggleMode}>
          {isLoginMode ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
