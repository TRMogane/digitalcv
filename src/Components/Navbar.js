import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Thabang Mogane</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                        

                    <li className="nav-item">
                        <Link to="/about" className="nav-link">My Experience</Link>
                    </li>
                   
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">Get in Touch</Link> 
                    </li>
                    </ul>
                </div>
                </nav>
           
        </div>
    )
}
