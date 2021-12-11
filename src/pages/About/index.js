import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../../components/Header'

import './style.css';
import Friends from '../../public/pexels-rodolfo-quirós-1730757.jpg';
import Community from '../../public/fei-chao-zUbSHj23Wws-unsplash.jpg';
import Badge from '../../public/pexels-jack-redgate-3013979.jpg';
import Challenge from '../../public/pexels-dave-meckler-3242025.jpg';

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
                <h1>AVENTURAS</h1>
                <h1>EXIGEM</h1>
                <h1 className="strong-green-text title">PARCEIROS</h1>
            </section>

            <section className="app-motivation-section">
                <h1 className="app-motivation-subtitle subtitle">E por isso que o <span className="strong-green-text subtitle">ADVENTUROUS</span> existe!</h1>
            
                <p className="app-motivation-desc text">Você já esteve em uma situação {"\n"}onde você buscava um parceiro {"\n"}ou um grupo para praticar um esporte?</p>
            </section>

            <section className="apps-possibilities" scroll="no">
                <aside className="gym-buddies-photo">
                    <span className="text">Um parceiro de academia</span>
                </aside>

                <aside className="skate-buddies-photo">
                    <span className="text">Ou alguém para te ensinar a{"\n"}andar de skate...</span>
                </aside>
            </section>

            <section className="app-existence-desc">
                <p className="subtitle">Não importa o motivo... A vida é melhor quando{"\n"}
                COMPARTILHAMOS e nós existimos para te ajudar a{"\n"}
                COMPARTILHAR e <span className="strong-green-text">VIVER</span> em comunidade!
                </p>

                <div className="app-existence-desc-box" >
                    <strong>E ai, vai perder?</strong>
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

                        <div className="app-existence-carousel-images">
                            <span className="app-existence-carousel-label">Encare desafios e se supere!</span>
                            <img src={Challenge} alt="Challenge" title="Challenge" />
                        </div>
                    </Carousel>
                </div>
            </section>

            <button className="download-button">Em breve</button>
        </div>
    )
}