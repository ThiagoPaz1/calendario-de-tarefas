import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainArea from '../src/pages/MainArea';
import AddOrEditArea from '../src/pages/AddOrEditArea';
import { TaskProvider } from '../src/context/Tasks';

function App() {
  return (
    <TaskProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <MainArea /> } />
            <Route path="/addOrEdit" element={ <AddOrEditArea /> } />
          </Routes>
       </BrowserRouter>
      </div>
    </TaskProvider>
  );
}

export default App;
