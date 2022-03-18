import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainArea from '../src/pages/MainArea';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainArea /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
