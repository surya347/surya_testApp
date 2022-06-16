import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Product from './Product';

function App() {
  return ( 
       <>
        {/* <h1>Surya</h1> */}
          {/* <Login/> */}
        <BrowserRouter>
            <Routes>
              <Route  path="/" element={<Login />} />
              <Route path="product" element={<Product />} />
            </Routes>
        </BrowserRouter>
       </> 
  )
}

export default App;
