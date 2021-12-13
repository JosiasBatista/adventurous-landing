import React from "react";
import Header from "../../components/Header";

import './styles.css';
import AdventurousIcon from '../../public/Adventurous.svg';
import LakeJump from '../../public/pexels-taryn-elliott-6701148.jpg';
import MountainTop from '../../public/pexels-jéshoots-69743.jpg';
import Surffing from '../../public/pexels-khairul-leon-695779.jpg';
import CupFrase from '../../public/pexels-s-migaj-891252.jpg';
import Cyclists from '../../public/pexels-pixabay-248547.jpg';

export default function Download() {
    return (
        <div className="download-page_container">
            <Header />

            <div className="download-page_content">
                {/* <img src={ClimberIcon} alt="escalador" title="escalador" />

                <strong>
                    Estamos quase finalizando a escalada!<br/>
                    <strong className="text_description_spotlight">
                        Em breve estará tudo pronto para você
                    </strong>
                </strong> */}
                <div className="download-page_infos">
                    <div className="download-page_infos-texts">
                        <strong>Estamos finalizando a escalada dessa montanha.</strong>
                        
                        <strong>Sabemos que está ansioso, mas logo nosso app estará disponível
                            para você poder escalar essa montanha conosco!
                        </strong>
                    </div>
                    <div className="app-presentation">
                        Em breve
                        <img src={AdventurousIcon} alt="Icon" title="Icon" />
                    </div>
                </div>

                <div className="download-page_image-montage">
                    <img src={LakeJump} alt="" title="" id="lake" />
                    <img src={MountainTop} alt="" title="" id="mountain"/>
                    <img src={Surffing} alt="" title="" id="surf"/>
                    <img src={CupFrase} alt="" title="" id="sentence"/>
                    <img src={Cyclists} alt="" title="" id="cycle"/>
                </div>
            </div>
        </div>
    )
}