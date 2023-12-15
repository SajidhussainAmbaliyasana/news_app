import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-item">
            <Link to="/">General</Link>
        </div>
        <div className="nav-item">
            <Link to="business">Business</Link>
        </div>
        <div className="nav-item">
            <Link to="entertainment">Entertainment</Link>
        </div>
        <div className="nav-item">
            <Link to="health">Health</Link>
        </div>
        <div className="nav-item">
            <Link to="science">Science</Link>
        </div>
        <div className="nav-item">
            <Link to="sports">Sports</Link>
        </div>
        <div className="nav-item">
            <Link to="technology">Technology</Link>
        </div>
    </div>
  )
}

export default Navbar
