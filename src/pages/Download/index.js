import React from "react";
import Header from "../../components/Header";

import './styles.css';
import ClimberIcon from '../../public/ChallengeIcon.svg';

export default function Download() {
    return (
        <div className="download-page_container">
            <Header />

            <div className="download-page_content">
                <img src={ClimberIcon} alt="escalador" title="escalador" />

                <strong>
                    Estamos quase finalizando a escalada!<br/>
                    <strong className="text_description_spotlight">
                        Em breve estará tudo pronto para você
                    </strong>
                </strong>

            </div>
        </div>
    )
}