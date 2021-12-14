import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Logo from '../../public/Logo.png';

export default function Header() {
    const [navigateToHome, setNavigateToHome] = useState(false);

    return (
        <section className="about-page_header">
            <img className="adventurous-logo" src={Logo} alt="logo" title="logo" onClick={() => setNavigateToHome(true)}/>
            <ul className="navigation-header white">
                <li><Link className="subtitle" to="/">Home</Link></li>
                <li><Link className="subtitle" to="/about">About</Link></li>
                <li><Link className="subtitle" to="/download">Download</Link></li>
            </ul>

            {navigateToHome &&
                <Redirect to="/" />
            }
        </section>
    )
}