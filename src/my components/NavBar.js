import React, { useState } from 'react'
import './NavBar.css'
import logo from '../logo.jpg'
import './logo.css'
import './search.css'


export default function NavBar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <img src={logo} className='navbar-logo' alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Indian</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Chinese</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Tandoor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                    </ul>
                </div>

                <div className="search-container">
                    <form action="">
                        <input type="search" placeholder="Search here ..." />
                        <i className="fa fa-search"></i>
                    </form>
                </div>
            </nav>
        </>
    )
}
