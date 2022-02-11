import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import GlobalProvider from './Context/GlobalProvider';
import Main from './Pages/Main';
import Detailed from './Pages/Detailed';


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Main /> } />
          <Route exact path="/:id" element={ <Detailed /> } />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;