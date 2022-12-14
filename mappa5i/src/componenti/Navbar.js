import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    
    
    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                
                <NavLink className="navbar-brand text-white" to="/">Mappa5I</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            
                            <NavLink className="navbar-brand text-white" to="/">Home</NavLink>
                            
                        </li>
                        <li className="nav-item mx-4">
                        <NavLink className="navbar-brand text-white" to="/mappa">Mappa</NavLink>

                        </li>
                        <li className="nav-item mx-4">
                        <NavLink className="navbar-brand text-white" to="/api">Api</NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}
 
export default Navbar;