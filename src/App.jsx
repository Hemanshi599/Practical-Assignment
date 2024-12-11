import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Grid from './Components/Grid/Grid';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
