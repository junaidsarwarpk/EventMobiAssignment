import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout, SearchScreen } from './routeScreens';

import "./global.scss";

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path='' element={<MainLayout />}>
            <Route path="/home" element={<SearchScreen />}></Route>
            <Route path="" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="*" element={<Navigate to="/home"></Navigate>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
