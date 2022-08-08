import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials=true;


const onLogin = (id, password) => {
  const data = {id, password};

  axios.post('/login', data).then(response => {
    const {accessToken} = response.data;

    // API 요청하는 콜마다 헤더에 accessToken 담아 보내드록 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  }).catch(error => {

  });

}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  <React.StrictMode>
  */
    <App />
  /*
  </React.StrictMode>
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
