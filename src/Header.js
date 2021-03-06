import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (

      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="container">
            <ul class="navbar-nav">
              <li className="nav-item active icon-container">
                <img src='irent_logo.png' class="navbar-icon" />
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"><span className="text-success">ire</span>nt</a>
              </li>
              <li className="nav-item float-right">

              </li>
            </ul>
            <span class="navbar-text">
              <img src='/ub-2.png' class="navbar-icon" />
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
