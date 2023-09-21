import React from 'react';
import './App.css';
import Index from './pages/Index';
// import FlightResult from './pages/FlightResult'; // Corrected import name
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flight_result1 from './pages/Flight_result1';

function App() {
  return (
    <Router>
      <div class="App">
        <Routes>
          <Route path="/" element={<Index />} /> {/* Updated route */}
          <Route path="/Flight_result1" element={<Flight_result1 />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;