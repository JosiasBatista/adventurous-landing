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
                    <strong className="index-page_explanation-title">Você é um<br/><strong className="strong-green-text">Adventurous?</strong></strong>
                    <p>Faça parte da nossa comunidade, encontre<br/>outras pessoas como você. Compartilhe<br/>suas fotos, publique suas<br/>conquistas e torne<br/>
                    visíveis as suas<br/><span className="strong-red-text">aventuras!</span></p>
                    <p>Você pode fazer isso e muito mais conosco!</p>
                </div>
                <img className="climbing-image" src={Climbing} alt="climbing" title="climbing" />
            </section>
            <section className="index-page_redirection">
                <strong>Por qual motivo sair em uma<br/>aventura sozinho quando<br/>você pode ser parte de um <strong className="strong-green-text">TIME</strong></strong>
                <button className="adventurous-button">Em breve</button>
                <img className="travelling-image" src={Travelling} alt="travelling" title="travelling" />
            </section>
        </div>
    )
}