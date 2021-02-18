import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <Auth0Provider
    domain="restless-frost-1836.us.auth0.com"
    clientId="5TkOfwHev7CBqL89I2rOj1b63q7ySVFx"
    redirectUri={`${window.location.origin}/profile`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

