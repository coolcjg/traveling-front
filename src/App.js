import './App.css';
import Nav from './Nav';
import Home from './Home';
import Info from './Info';
import JoinForm from './JoinForm';
import LoginForm from './LoginForm';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/info" element={<Info/>}/>
          <Route exact path="/joinForm" element={<JoinForm/>}/>
          <Route exact path="/loginForm" element={<LoginForm/>}/>
        </Routes>
        </BrowserRouter>  
    </>
  );
};

export default App;
