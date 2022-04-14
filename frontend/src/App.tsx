import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

const App = () => {
  const CustomDishPage = lazy(() => import("./components/CustomDishPage"));
  const FavDishPage = lazy(() => import("./components/FavDishPage"));
  const RandomDishPage = lazy(() => import("./components/RandomDishPage"));

  return (
    <div>
      <BrowserRouter>
        <div>
        <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/custDish' element={<CustomDishPage />} />
              <Route path='/favDish' element={<FavDishPage />} />
              <Route path='/randomDish' element={<RandomDishPage />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
