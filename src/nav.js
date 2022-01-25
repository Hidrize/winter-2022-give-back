import React from 'react';
import './App.css';
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav>
        <h2>Charity</h2>
    <ul class="nav-links">
        <li> <Link to="/"> Home </Link>
        </li>
        <li>
        <Link to="/Components/Testimonial"> Testimonial </Link>
        </li>
        <li>
        <Link to="/Components/Donate"> Donate </Link>
        </li>
        <li>
        <Link to="/Components/About-us"> About us </Link>
        </li>
    </ul>
    </nav>
  );
}

export default Nav;