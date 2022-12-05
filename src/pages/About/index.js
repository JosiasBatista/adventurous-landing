import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaGooglePlay } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../../components/Header'

import './style.css';
import Friends from '../../public/interactions.webp';
import Community from '../../public/community.webp';
import Badge from '../../public/badge.webp';
import Challenge from '../../public/challenge.webp';
import CliffJump from '../../public/travel.webp';
import Steps from '../../public/legacy.webp';

export default function AboutPage() {

    function goToDownload() {
        window.location.replace("https://play.google.com/store/apps/details?id=com.going.goingapp")
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
                COMPARTILHAMOS e nós existimos para te ajudar a
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
                        infiniteLoop={true}
                    >
                        <div className="app-existence-carousel-images">
                            <div className="app-existence-carousel-label-container">
                                <span className="app-existence-carousel-label text">Encontre pessoas com os mesmos interesses!</span>
                            </div>
                            <img src={Friends} alt="Friends" title="Friends" />
                        </div>

                        <div className="app-existence-carousel-images">
                            <div className="app-existence-carousel-label-container">
                                <span className="app-existence-carousel-label text">Faça parte de comunidades do que você ama!</span>
                            </div>
                            <img src={Community} alt="Community" title="Community" />
                        </div>
                        
                        <div className="app-existence-carousel-images">
                            <div className="app-existence-carousel-label-container">
                                <span className="app-existence-carousel-label text">Ganhe insígnias que mostrem quem você é!</span>
                            </div>
                            <img src={Badge} alt="Badge" title="Badge" />
                        </div>

                        <div className="app-existence-carousel-images">
                            <div className="app-existence-carousel-label-container">
                                <span className="app-existence-carousel-label text">Encare desafios e se supere!</span>
                            </div>
                            <img src={Challenge} alt="Challenge" title="Challenge" />
                        </div>

                        <div className="app-existence-carousel-images">
                            <div className="app-existence-carousel-label-container">
                                <span className="app-existence-carousel-label text">Encontre a aventura da próxima viagem!</span>
                            </div>
                            <img className="cliff-jump-image" src={CliffJump} alt="CliffJump" title="CliffJump" />
                        </div>

                        <div className="app-existence-carousel-images">
                            <div className="app-existence-carousel-label-container">
                                <span className="app-existence-carousel-label text">Escreva o seu legado!</span>
                            </div>
                            <img className="steps-image" src={Steps} alt="Steps" title="Steps" />
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="download_call_container">
                <span className="download_call">Baixe agora</span>
                <button className="no-style-button" onClick={() => goToDownload()}>
                    <FaGooglePlay size={50} color="#00FF79" />
                </button>
            </section>
        </div>
    )
}