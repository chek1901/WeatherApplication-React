import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <React.Fragment>
        <div className="container">
            <div className="weatherNav">
            <nav className="navbar navbar-expand">
                <a className="navbar-brand"> <span className="navbar_name text-white"> WeatherApp </span>
                    <i className="fa fa-cloud fa-2x text-white" aria-hidden="true"></i>
                </a>
                <ul className= "navbar-nav mr-auto">
                    <li className="nav-item"> 
                        <NavLink className="nav-link" to="/"> Home </NavLink> </li>
                    <li className="nav-item"> 
                        <NavLink className="nav-link" to="/about"> About </NavLink> </li>
                    <li className="nav-item"> 
                        <NavLink className="nav-link" to="/contact"> Contact </NavLink> </li>
                </ul>
            </nav>
            </div>
       </div>
        </React.Fragment>
    )
}

export default Navigation;