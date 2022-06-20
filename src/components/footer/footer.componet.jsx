import React from "react";
import "./footer.css"

function Footer({ gameStarted, onLevelChange, onModeChange, onBackground, configShow, onConfig }) {
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
                            <select 
                                defaultValue="0"
                                onChange={onLevelChange}
                            >
                                <option value="0">Selecione...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="mode-selecter">
                            <p className="w3-text-white">Modo de jogo:</p>
                            <select
                                defaultValue="0"
                                onChange={onModeChange}
                            >
                                <option value="0">Selecione...</option>
                                <option value="1">Método normal</option>
                                <option value="2">Método categoria</option>
                                <option value="3">Custom - Escolha de palavras</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;