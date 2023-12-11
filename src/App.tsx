import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./View/common/NavBar/NavBar";
import {MainContent} from "./View/common/MainContent/MainContent";
import {Footer} from "./View/common/Fotter/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar/>
              <MainContent/>
              <Footer/>
          </BrowserRouter>
      </>
  );
}

export default App;
