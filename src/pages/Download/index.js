import React from "react";
import Header from "../../components/Header";
import { FaGooglePlay } from 'react-icons/fa';

import './styles.css';
import AdventurousIcon from '../../public/Adventurous.svg';
import LakeJump from '../../public/lake.webp';
import MountainTop from '../../public/mountain.webp';
import Surffing from '../../public/surf.webp';
import CupFrase from '../../public/sentence.webp';
import Cyclists from '../../public/cycle.webp';

export default function Download() {

    const goToDownload = () => {
        window.location.replace("https://play.google.com/store/apps/details?id=com.going.goingapp")
    }

    return (
        <div className="download-page_container">
            <Header />

            <div className="download-page_content">
                <div className="download-page_infos">
                    <div className="download-page_infos-texts">
                    
                        <span className="download_call">Baixe agora</span>
                        <button className="no-style-button" onClick={() => goToDownload()}>
                            <FaGooglePlay size={50} color="#00FF79" />
                        </button>
                    </div>
                    <div className="app-presentation">
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