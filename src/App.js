import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import React from 'react';

import Employee from './pages/Employee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="employee" element={<Employee />} />
        {/* <Route path="team" element={<Team />} /> */}
        <Route path="*" element={<Navigate replace to='/employee' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
