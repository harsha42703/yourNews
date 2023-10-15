import React from 'react';
import '../index.css';
import '../App.css';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const textClass = '#00bff';

  const linkStyle = {
    color: '#00bfff',
    fontWeight: '500',
    textShadow: '1px 1px 25px #00bfff',
  };

  const logoStyle = {
    color: '#00bfff',
    fontWeight: '500',
    textShadow: '1px 1px 35px #00bfff',
  };

  const spanStyle = {
    color: 'red',
    fontWeight: '500',
    textShadow: '1px 1px 35px red',
  };


  const breakStyle = {
    color: 'orange',
    fontWeight: '500',
    textShadow: '1px 1px 35px orange',
  };

  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-skyblue`} style={navBarStyle}>
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand ${textClass}`} style={logoStyle}>Your<span style={spanStyle}>NEWS</span></Link>
          <a className="navbar-toggler btn btn-info" href='.' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
              <li className="nav-item">
                <Link to="/" className={`nav-link ${textClass}`} style={breakStyle} activeClassName="active-tab">Breaking News</Link>
              </li>
              <li className="nav-item">
                <Link to="/business" className={`nav-link ${textClass}`} style={linkStyle} activeClassName="active-tab">Business</Link>
              </li>
              <li className="nav-item">
                <Link to="/entertainment" className={`nav-link ${textClass}`} style={linkStyle} activeClassName="active-tab">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link to="/health" className={`nav-link ${textClass}`} style={linkStyle} activeClassName="active-tab">Health</Link>
              </li>
              <li className="nav-item">
                <Link to="/science" className={`nav-link ${textClass}`} style={linkStyle} activeClassName="active-tab">Science</Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className={`nav-link ${textClass}`} style={linkStyle} activeClassName="active-tab">Sports</Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className={`nav-link ${textClass}`} style={linkStyle} activeClassName="active-tab">Technology</Link>
              </li>
            </ul>
            <li className="form-check form-switch key">
              <input
                style={{ border: '1px solid' }}
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className={`form-check-label ${textClass}`} style={linkStyle} htmlFor="flexSwitchCheckDefault">
                {props.isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </label>
            </li>
            <li className='copyright'>
              <p>&copy;created by Harsha</p>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}


const navBarStyle = {
  backgroundColor: 'rgb(255, 255, 255)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2)',
  borderRadius: '0px 0px 15px 15px',
};

export default NavBar;
