import React from "react";
import "./footer.css"

function Footer({ gameStarted, onBackground, configShow, onConfig }) {
    const gameClass =
        gameStarted
        ? "fadeOut"
        : "" 

    const configClass =
        configShow
        ? "show-config"
        : ""

    const iconClass =
        configShow
        ? "bi-chevron-down"
        : "bi-chevron-up"

    setTimeout(() => {
        document.getElementById("config-panel").className="config-panel";
    }, 800);

    return(
        <section id="footer" className={`${gameClass}`}>
            <div className="background-selecter">
                <label className="w3-text-white">Background</label>
                <input className="w3-check" type="checkbox" onChange={onBackground} defaultChecked={true}/>
            </div>
            <div className={`footer-section ${configClass}`}>
                <div className="footer-icon">
                    <div className="vertical-middle auto-size">
                        <button type="button" onClick={onConfig} className="invisibel w3-animate-bottom">
                            <i className={`bi ${iconClass} w3-text-amber w3-large`}></i>
                        </button>
                    </div>
                </div>
                <div id="config-panel" className="config-panel preload">
                    <div className="w3-panel w3-border w3-border-amber w3-round-xlarge grid">
                        <div className="level-selecter">
                            <p className="w3-text-white">Selação de nível:</p>
                            <ul>
                                <li>
                                    <input className="w3-radio" type="radio" name="level" value="1" /* checked *//>
                                    <label className="w3-text-white">1</label>
                                </li>
                                <li>
                                    <input className="w3-radio" type="radio" name="level" value="2" />
                                    <label className="w3-text-white">2</label>
                                </li>
                                <li>
                                    <input className="w3-radio" type="radio" name="level" value="3" />
                                    <label className="w3-text-white">3</label>
                                </li>
                            </ul>
                        </div>
                        <div className="mode-selecter">
                            <p className="w3-text-white">Modo de jogo:</p>
                            <ul>
                                <li>
                                    <input className="w3-radio" type="radio" name="mode" value="1" /* checked *//>
                                    <label className="w3-text-white">Método normal</label>
                                </li>
                                <li>
                                    <input className="w3-radio" type="radio" name="mode" value="2" />
                                    <label className="w3-text-white">Método categoria</label>
                                </li>
                                <li>
                                    <input className="w3-radio" type="radio" name="mode" value="3" />
                                    <label className="w3-text-white">Custom - Escolha de palavras</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;