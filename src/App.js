import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Account from './components/Account';
import './App.css';

const NavbarComponent = () => {
  return (
    <Navbar color="light" light expand="md">
      <div className="container d-flex justify-content-center">
        <Nav navbar>
          <NavItem>
            <NavLink href="/">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cart">Cart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/account">Account</NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="bgcolor">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;