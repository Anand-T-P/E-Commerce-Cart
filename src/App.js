import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductHome from './Pages/ProductHome';

function App() {
  
    
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductHome/>}/>
        </Routes>
        </Router>
  );
}

export default App;
