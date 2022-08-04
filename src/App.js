import './App.css';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>  
    </>
  );
};

export default App;
