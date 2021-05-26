import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import MyRoute from './Components/myRouter'
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/footer'

function App() {
  return (
    <div>
     
      <BrowserRouter>
      
      <Navbar></Navbar>
      <MyRoute></MyRoute>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
