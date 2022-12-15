import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ReactDOM } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Media from './pages/Media';
import Packages from './pages/Packages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About/> } />
      <Route path="contactus" element={ <ContactUs /> } />
      <Route path="media" element={ <Media /> } />
      <Route path="packages" element={ <Packages /> } />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
