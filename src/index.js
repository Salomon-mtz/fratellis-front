import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from "./Menu";
import Contact from './Contacto';
import Packages from './Packages';
import AboutUs from './AboutUs';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/paquetes" element={<Packages />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
