import React from 'react';
import Header from '../../components/Header'

import './style.css';

export default function AboutPage() {
    return (
        <div className="about-page_container">
            <Header />

            <div className="about-page_introduction"></div>
            <section className="about-page_introduction-title">
                <h1>ADVENTURES</h1>
                <h1>NEEDS</h1>
                <h1 className="strong-green-text title">PARTNERS</h1>
            </section>

            <section className="app-motivation-section">
                <h1 className="app-motivation-subtitle subtitle">And that is why the <span className="strong-green-text subtitle">ADVENTUROUS</span> exists</h1>
            
                <p className="app-motivation-desc text">Have you ever been in a situation{"\n"}where you were looking for a partner{"\n"}or a group of people to play a sport?</p>
            </section>

            <section className="apps-possibilities">
                <aside className="gym-buddies-photo">
                </aside>

                <aside className="skate-buddies-photo">
                </aside>
            </section>
        </div>
    )
}