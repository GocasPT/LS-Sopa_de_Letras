import React, { useEffect, useState } from "react";
import "./game-panel.css"
import { Board } from "../"

import {
    TIMEOUTGAME,
} from "../../constants"

let timerId = undefined

function GamePanel({ gameStarted, onGameStart, boardSize }) {
    const [selectWord,setSelectedWord] = useState([]);
    const [timer, setTimer] = useState(TIMEOUTGAME);
    
    const gameClass =
        gameStarted
        ? "gameStarted"
        : "" 

    const handleSelect = (word) => {
        if (gameStarted) {
            setSelectedWord(previousState => [...previousState, word]);
        }
    }

    useEffect(() => {
        if (gameStarted) {
            timerId = setInterval(() => {
                let nextTimer;
                setTimer((previousState) => {
                    nextTimer = previousState - 1;
                    return nextTimer;
                });

                if (nextTimer === 0) {
                    //setGameStarted(false);
                    console.log("acabou")

                }
            }, 1000);
        } else if (timer !== TIMEOUTGAME) {
            setTimer(TIMEOUTGAME);
            
            //updatePoints()
            //setGamerOver(true)
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [gameStarted]);

    useEffect(() => {
        if(gameStarted && selectWord.length === 2) {
            //processMatchingCards()
        }
    }, [selectWord]) 

    return(
        <section id="game-control" className="w3-row">
            <span className="w3-quarter w3-container"></span>
            <div className="game-control-res w3-half w3-container">
                <div id="panel-control" className={`list ${gameClass}`}>
                    <p>Game Panel</p>
                    <p>tempo</p>
                    <div id="timer">{timer}</div> 
                    <p>Quantidade</p>
                    <div>
                        <p>0/20</p>
                    </div>
                    {/* <button type="button" onClick={onGameStart}>Exit</button> */}
                </div>
                <span className="break"></span>
                <Board 
                    boardSize={boardSize}
                    onSelect={handleSelect}
                />
                <ul className="lista-names">
                    <li>Salgado</li>
                    <li>Velho</li>
                    <li>São</li>
                    <li>Gostosos</li>
                    <li>E</li>
                    <li>Lindos</li>
                    <li>❤️</li>
                </ul>
                <span className="break"></span>
                <div>
                    <p>@ISEC - Curso Engenharia Informática</p>
                </div>
            </div>
            <span className="w3-quater w3-container"></span>
        </section>
    );
}

export default GamePanel;