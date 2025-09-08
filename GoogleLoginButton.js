import React, { useContext } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLoginButton = () => {
  const { setUser } = useContext(AuthContext);

  const onSuccess = async credentialResponse => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/google`, 
        { token: credentialResponse.credential },
        { withCredentials: true }
      );
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/user`, { withCredentials: true });
      setUser(res.data);
    } catch (err) {
      console.error('Google login error:', err);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onError={() => console.log('Login Failed')} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
