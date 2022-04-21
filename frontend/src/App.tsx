import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import RandomDishPage from './components/RandomDishPage';
import RegisterPage from './components/RegisterPage';
import CustomDishPage from './components/CustomDishPage';
import FavDishPage from './components/FavDishPage';
import LoginPage from './components/LoginPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/custDish' element={<CustomDishPage />} />
          <Route path='/favDish' element={<FavDishPage />} />
          <Route path='/randomDish' element={<RandomDishPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
