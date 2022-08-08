import './App.css';
import Nav from './Nav';
import Home from './Home';
import Info from './Info';
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
          <Route exact path="/loginForm" element={<LoginForm/>}/>
        </Routes>
        </BrowserRouter>  
    </>
  );
};

export default App;
