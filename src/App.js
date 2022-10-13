import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCoffee from './pages/SingleCoffee';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="coffee/:id" element={<SingleCoffee />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
