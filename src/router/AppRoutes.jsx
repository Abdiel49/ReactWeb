import React from 'react'
// import { Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductsView from '../views/ProductsView'
import ShoppingCartView from '../views/ShoppingCartView'

import NavBar from '../componets/navbar/NavBar'

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <div style={{ marginTop: '60px', padding: '20px' }}> {/* Offset for fixed navbar */}
        <Routes >
          <Route path="/" element={<ProductsView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/pedido" element={<ShoppingCartView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRoutes