import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">MiTienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Catálogo</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/consolas">Consolas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/accesorios">Accesorios</Link></li>
          </ul>
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
