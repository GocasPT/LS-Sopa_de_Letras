import { useState, useEffect } from 'react';
import { LEVELS, LEVELS_CONFIG } from './constants';
import { ControlPanel, GameOverModel, GamePanel } from './components';
import { getListWords } from './helpers';
import './assets/styles/App.css';

let timerId;

function App() {
    const [gameStarted, setGameStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [boardConfig, setBoardConfig] = useState(LEVELS_CONFIG[0]);
    const [words, setWords] = useState([]);
    const [customWords, setCustomWords] = useState([]);
    const [timer, setTimer] = useState(LEVELS_CONFIG[1].time);
    const [points, setPoints] = useState(0);

    const handleSelectLevel = (level) => {
        setBoardConfig(
            LEVELS_CONFIG.find((config) => config.value === level) ||
                LEVELS_CONFIG[0],
        );
    };

    const handlCustomWords = (word) => {
        setCustomWords((previousState) => [...previousState, word]);
    };

    const handleGameStart = () => {
        if (gameStarted) {
            setGameStart(false);
            setGameOver(true);
        } else {
            setWords([
                ...(getListWords(boardConfig.words - customWords.length) +
                    customWords),
            ]);
            setGameStart(true);
        }
    };

    useEffect(() => {
        if (gameStarted) {
            timerId = setInterval(() => {
                let nextTimer;
                setTimer((previousState) => {
                    nextTimer = previousState - 1;
                    return nextTimer;
                });

                if (nextTimer === 0) {
                    setGameStart(false);
                    setGameOver(true);
                }
            }, 1000);
        } else if (timer !== LEVELS_CONFIG[1].time) {
            setTimer(LEVELS_CONFIG[1].time);
            updatePoints();
            setGameOver(true);
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [gameStarted]);

    const updatePoints = (word) => {
        let currentPoints = points;

        // TODO: points system
        currentPoints += word.length * 10 * (boardConfig.time - timer); // bigger word + less time = more points

        setPoints(currentPoints);
    };

    return (
        <main>
            <ControlPanel
                levels={LEVELS}
                gameStarted={gameStarted}
                onGameStart={handleGameStart}
                selectedLevel={boardConfig.value}
                onSelectLevel={handleSelectLevel}
                customWords={customWords}
                onCustomWords={handlCustomWords}
            />
            <GamePanel
                boardConfig={boardConfig}
                wordsList={words}
                gameStarted={gameStarted}
                onGameStart={handleGameStart}
                points={points}
                onUpdatePoints={updatePoints}
                timer={timer}
            />
            <GameOverModel isOpen={gameOver} points={points} timer={timer} />
        </main>
    );
}

export default App;
