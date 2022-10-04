// React Components
import React from 'react'

// CSS Styles
import Navbar from './Navbar.css'


export default function Navbar() {
    return (
        <nav>
            <ul>
                <Link to="/home" className="nav-class"> Item One</Link>
                <Link to="/product" className="nav-class">Item Two</Link>
                <Link to="/features" className="nav-class">Item Three</Link>
                <Link to="/pricing" className="nav-class">Item Four</Link>
                <Link to="/about" className="nav-class">Item Five</Link>
                <Searchbar />
            </ul>
        </nav>
    )
}
