import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../../components/Header'

import './style.css';
import Friends from '../../public/pexels-rodolfo-quirós-1730757.jpg';
import Community from '../../public/fei-chao-zUbSHj23Wws-unsplash.jpg';
import Badge from '../../public/pexels-jack-redgate-3013979.jpg';

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
                    <Carousel
                        emulateTouch={true}
                        swipeable ={true}
                        autoPlay={true}
                        interval={4000}
                        showArrows={false}   
                        showThumbs={false} 
                        showStatus={false}
                        className="app-existence-carousel"
                        transitionTime={500}
                        stopOnHover={false}
                    >
                        <div className="app-existence-carousel-images">
                            <span className="app-existence-carousel-label">Encontre pessoas com os mesmos interesses!</span>
                            <img src={Friends} alt="Friends" title="Friends" />
                        </div>

                        <div className="app-existence-carousel-images">
                            <span className="app-existence-carousel-label">Faça parte de comunidades do que você ama!</span>
                            <img src={Community} alt="Community" title="Community" />
                        </div>
                        
                        <div className="app-existence-carousel-images">
                            <span className="app-existence-carousel-label">Ganhe insígnias que mostrem quem você é!</span>
                            <img src={Badge} alt="Badge" title="Badge" />
                        </div>
                    </Carousel>
                </div>
            </section>

            <button className="download-button">Soon</button>
        </div>
    )
}