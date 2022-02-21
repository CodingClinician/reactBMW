import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Calendar from './Components/Calnedar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
       
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' exact element={<About />} />
              <Route path='/calendar' exact element={<Calendar />} />
          </Routes>
          </Router>
       
      </div>
  );
}

export default App;
 