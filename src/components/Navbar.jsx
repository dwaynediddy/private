import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">
    <i className="fas fa-bars" style={{ color: "whitesmoke" }}></i>
    </span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="Home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="About">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Projects">Projects</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="Contacts">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
        
    )
}
