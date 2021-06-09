import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
<nav id="Nav" className="navbar navbar-expand-lg navbar-light bg-light sticky-top border fixed-top">
        <section className="container-fluid">
        
       
        
        <br>
        </br>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/home'>
                <li className="nav-item">
                    <div
                        className="nav-link active"
                        aria-current="page">Home
                    </div>
                </li>
            </Link>
            <Link to='/contact'>
                <li className="nav-item">
                    <div
                        className="nav-link active"
                        aria-current="page">Contact
                    </div>
                </li>
            </Link>
            <Link to='/portfolio'>
                <li className="nav-item">
                    <div
                        className="nav-link active"
                        aria-current="page">Portfolio
                    </div>
                </li>
            </Link>
          
            </ul>
        </section>
</nav>
    );
};

export default Navbar;