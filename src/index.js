import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <Auth0Provider
    domain="divine-bush-5255.us.auth0.com"
    clientId="9jaQhWCFxRrB1ncu4DJX8njMYxSjP3KU"
    redirectUri={`${window.location.origin}/home`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

