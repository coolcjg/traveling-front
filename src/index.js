import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import setAuthorizationToken from './jwt/setAuthorizationToken';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CountReducer from './reducer/count';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials=true;

setAuthorizationToken(localStorage.accessToken);

const store = createStore(CountReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  <React.StrictMode>
  */
<Provider store={store}>
    <App />
</Provider>
  /*
  </React.StrictMode>
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
