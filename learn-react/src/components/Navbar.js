import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
    
    return (
        <>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title1}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.title2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.title5}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.title3}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">{props.title4}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title1:PropTypes.string.isRequired,
    title2:PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title1: "Enter Home",
    title2: "Enter About",
    title3: "Enter Drop",
    title4: "Search",
    title5: "Link",
}