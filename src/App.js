import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Countries from './Components/Countries';
import CountryDetails from './Components/CountryDetails';
import Error from './Components/Error';
import './App.css';
import Header from './Components/Header';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<CountryDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  
