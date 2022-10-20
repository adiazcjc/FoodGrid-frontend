import React from 'react';
// import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from "../images/newlogo.png"

export default function NavBar() {

  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#184374" }}>
      <div class="container-fluid">
        <Link to='/Home' style={{ textDecoration: 'none' }}>
          <img src={imagen} alt="" width="80" height="80" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to='/Home' style={{ textDecoration: 'none' }}>
                <a class="nav-link active " aria-current="page" href="#" style={{ color: '#E1E3EC' }}>Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/recipes' style={{ textDecoration: 'none' }}>
                <a class="nav-link active " aria-current="page" href="#" style={{ color: '#E1E3EC' }}>New Recipe</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/about' style={{ textDecoration: 'none' }}>
                <a class="nav-link active " aria-current="page" href="#" style={{ color: '#E1E3EC' }}>About</a>
              </Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  )
}
