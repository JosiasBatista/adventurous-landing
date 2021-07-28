import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Logo from '../../public/Logo.png';
import TravelBuddies from '../../public/travel-buddies.jpg';

export default function AboutPage() {
    return (
        <div className="about-page_container">
            <section className="about-page_header">
                <img className="adventurous-logo" src={Logo} alt="logo" title="logo" />
                <ul className="navigation-header white">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about">Download</Link></li>
                </ul>
            </section>

            <div className="about-page_introduction">
                <section className="about-page_introduction-title">
                    <h1>ADVENTURES</h1>
                    <h1>NEEDS</h1>
                    <h1 className="strong-green-text">PARTNERS</h1>
                </section>
            </div>
        </div>
    )
}