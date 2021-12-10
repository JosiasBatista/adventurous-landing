import React from 'react';

import './style.css';

import Skateboarding from '../../public/Skateboarding.png'
import Snowboarding from '../../public/Snowboarding.png'
import Climbing from '../../public/Climbing.png'
import Travelling from '../../public/Travelling.png';
import Header from '../../components/Header';

export default function Index() {
    return (
        <div className="index-page_container">
            <Header />

            <section className="index-page_call">
                <div className="index-page_call-first-text">
                    <strong>Move Fast</strong>
                </div>
                <div className="index-page_call-second-text">
                    <strong>Join US</strong>
                </div>
                <div className="skateboarding-container">
                    <img className="skateboarding-image" src={Skateboarding} alt="skateboarding" title="skateboarding" />
                </div>
                <img className="snowboarding-image" src={Snowboarding} alt="snowboarding" title="snowboarding" />
            </section>
            <section className="index-page_explanation">
                <div className="index-page_explanation-text">
                    <strong className="index-page_explanation-title">Are you an<br/><strong className="strong-green-text">Adventurous?</strong></strong>
                    <p>Join our community an find<br/>others people like you. Share<br/>your videos, publish your<br/>eXtreme photos and make<br/>visible all of your<br/><span className="strong-red-text">adventures!</span></p>
                    <p>You can do this and much more in our application</p>
                </div>
                <img className="climbing-image" src={Climbing} alt="climbing" title="climbing" />
            </section>
            <section className="index-page_redirection">
                <strong>Because why join an<br/>adventure alone when you<br/>can be part of a <strong className="strong-green-text">TEAM</strong></strong>
                <button className="adventurous-button">Soon</button>
                <img className="travelling-image" src={Travelling} alt="travelling" title="travelling" />
            </section>
        </div>
    )
}