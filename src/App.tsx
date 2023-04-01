import React, { useCallback, useEffect, useState } from 'react';
import axios  from "axios";
import './App.css';
import Dashboard from './pages/Dashboard';
import Fooder from './components/Fooder';
function App() {
  const [data, setData] = useState([])
 

  return (
    <div className='main-container'>
      <Dashboard/>
      <Fooder/>
    </div>
  );
}

export default App;
