import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css'
import reportWebVitals from './reportWebVitals';
import HeaderPort from './Component/HeaderPort';
import CoverPage from './Component/CoverPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Top from './Component/Top';
import Dark from './Component/Dark';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HeaderPort/>
  <CoverPage/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
  <Dark/>
  <Top/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
