import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/details';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
