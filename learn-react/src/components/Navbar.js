import React from 'react';
import PropTypes from 'prop-types';
import AlertPopUp from './AlertPopUp';

export default function Navbar(props) {

    return (
        <>
            
            <nav className={`navbar navbar-expand-lg navbar-${props.dark} bg-${props.light}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.HomeTitle}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.AboutTitle}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.DropdownTitle}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.mode} />
                            <label class={`form-check-label text-${props.col} mx-3 fs-6`} for="flexSwitchCheckDefault">◑</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success " type="submit">{props.SearchTitle}</button>
                        </form>
                       
                    </div>
                </div>
            </nav>
           
        </>
    );
}   

Navbar.propTypes = {
    HomeTitle: PropTypes.string.isRequired,
    AboutTitle: PropTypes.string.isRequired,
    DropdownTitle: PropTypes.string.isRequired,
    SearchTitle: PropTypes.string.isRequired,
    mode: PropTypes.func.isRequired,
   
}

Navbar.defaultProps = {
    HomeTitle: "Home",
    AboutTitle: "About",
    DropdownTitle: "Dropdown",
    SearchTitle: "Search",
 
}