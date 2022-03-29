import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (!email) {
      setMessage('Email required');
    } else if (!password) {
      setMessage('Password required');
    } else {
      setMessage('');

      if (email === 'tosundui@gmail.com' && password === '123') {
        setMessage('successful');
      } else {
        setMessage('Invalid email or password');
      }
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-header'>
          <h3>LOGIN</h3>
          <p className='error'>{message}</p>
        </div>
        <div className='login-input'>
          <p>Email:</p>
          <input type='text' onChange={(e) => setEmail(e.target.value)} />
          <p>Password:</p>
          <input type='password' name='' id='' onChange={(e) => setPassword(e.target.value)} />
          <a href='#'>Create an account?</a>
          <button onClick={handleLogin}>Login</button>
          <a href='#'>Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
