import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootPage from './components/rootpage/RootPage';

function App() {
  return (
    // ITS ONLY FOR DEFINING AND BYPASSING THE PATHS(THE CORE PATHS) 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;