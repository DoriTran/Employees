import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';

import Employee from './pages/Employee'
import Profile from './pages/Profile'
import Team from './pages/Team'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="employee" element={<Employee/>} />
        <Route path="profile/id=:EmployeeID" element={<Profile></Profile>} />
        <Route path="team" element={<Team/>} />
        <Route path="*" element={<Navigate replace to='/employee' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
