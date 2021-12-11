import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../public/Logo.png';

export default function Header() {
    return (
        <section className="about-page_header">
            <img className="adventurous-logo" src={Logo} alt="logo" title="logo" />
            <ul className="navigation-header white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/download">Download</Link></li>
            </ul>
        </section>
    )
}