import React from 'react';
import '../styles/Auth.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
};

export default AuthLayout;
