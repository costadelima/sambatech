import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css'; 

// import { Container } from './styles';

import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
            <Link to="/">
                <img src={logo} alt="BreakingBad"/>
            </Link>
            <Link to="/Episodios">
                <h1>Episodios</h1>                
            </Link>
            <Link to="/Sugestao">
                <h1>Sugestao</h1>                
            </Link>
        </div>
    </header>
  );
}