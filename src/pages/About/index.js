import React, { useState } from 'react';
import Header from '../../components/Header'

import './style.css';
import ChevronRight from '../../public/chevron-right.svg';
import ChevronLeft from '../../public/chevron-left.svg';

export default function AboutPage() {
    const [actualNumberMessage, setActualNumberMessag] = useState(0)
    const [messages, ] = useState([
        "Find people with the same \n interestes",
        "Join communities of what \n you love"            
    ])

    function getActualMessage() {
        return messages[actualNumberMessage]
    }

    return (
        <div className="about-page_container">
            <Header />

            <div className="about-page_introduction">
            </div>

            <section className="about-page_introduction-title">
                <h1>ADVENTURES</h1>
                <h1>NEEDS</h1>
                <h1 className="strong-green-text title">PARTNERS</h1>
            </section>

            <section className="app-motivation-section">
                <h1 className="app-motivation-subtitle subtitle">And that is why the <span className="strong-green-text subtitle">ADVENTUROUS</span> exists</h1>
            
                <p className="app-motivation-desc text">Have you ever been in a situation{"\n"}where you were looking for a partner{"\n"}or a group of people to play a sport?</p>
            </section>

            <section className="apps-possibilities" scroll="no">
                <aside className="gym-buddies-photo">
                    <span className="text">Maybe a gym partner</span>
                </aside>

                <aside className="skate-buddies-photo">
                    <span className="text">Or people to teach you how{"\n"}to skateboard...</span>
                </aside>
            </section>

            <section className="app-existence-desc">
                <p className="subtitle">It doesn’t matter... Life is better when{"\n"}
                SHARED and we exist to help you{"\n"}
                SHARE and <span className="strong-green-text">LIVE</span> in community
                </p>

                <div className="app-existence-desc-box" >
                    <p className="text">{getActualMessage()}</p>

                    {actualNumberMessage < messages.length - 1 ?
                        <button onClick={() => setActualNumberMessag(actualNumberMessage + 1)} className="invisible-button right">
                            <img src={ChevronRight} alt="right"/>
                        </button>
                        :
                        <button onClick={() => setActualNumberMessag(actualNumberMessage - 1)} className="invisible-button left">
                            <img src={ChevronLeft} alt="left"/>
                        </button>
                    }
                </div>
            </section>

            <button className="download-button">Join US</button>
        </div>
    )
}