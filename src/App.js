import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CreateProduct from "./pages/Create";
import EditProduct from "./pages/Edit";
import ProductList from "./pages/List";
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route exact path='/products' element={<ProductList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
