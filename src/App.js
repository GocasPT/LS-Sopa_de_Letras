import { useState, useEffect } from 'react';
import { GAME_STATES, LEVELS_CONFIG } from './constants';
import { ControlPanel, GameOverModel, GamePanel } from './components';
import { getListWords } from './helpers';
import './assets/styles/App.css';

let timerId;

function App() {
    const [gameState, setGameState] = useState(GAME_STATES.Ready);
    const [selectedLevel, setSelectedLevel] = useState('');
    const [boardConfig, setBoardConfig] = useState(LEVELS_CONFIG.Default);
    const [words, setWords] = useState([]);
    const [customWords, setCustomWords] = useState([]);
    const [timer, setTimer] = useState(LEVELS_CONFIG.Default.time);
    const [points, setPoints] = useState(0);

    const handleSelectLevel = (level) => {
        setSelectedLevel(level);
        setBoardConfig(LEVELS_CONFIG[level] || LEVELS_CONFIG.Default);
    };

    const handlCustomWords = (word) => {
        setCustomWords((previousState) => [...previousState, word]);
    };

    const handleGameStart = () => {
        switch (gameState) {
            case GAME_STATES.Ready:
                setWords([
                    ...getListWords(boardConfig.words - customWords.length),
                    ...customWords,
                ]);
                setTimer(boardConfig.time);
                setGameState(GAME_STATES.InGame);
                break;

            case GAME_STATES.InGame:
                setGameState(GAME_STATES.GameOver);
                break;

            case GAME_STATES.GameOver:
                setGameState(GAME_STATES.Ready);
        }
    };

    useEffect(() => {
        if (gameState === GAME_STATES.InGame) {
            timerId = setInterval(() => {
                setTimer((previousState) => {
                    const nextTimer = previousState - 1;

                    if (nextTimer === 0) {
                        setGameState(GAME_STATES.GameOver);
                    }

                    return nextTimer;
                });
            }, 1000);
        } else if (timer !== boardConfig.time) {
            setTimer(boardConfig.time);
            updatePoints('');
            setGameState(GAME_STATES.GameOver);
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [gameState]);

    useEffect(() => {
        if (gameState === GAME_STATES.GameOver) {
            setWords([]);
            setCustomWords([]);
        }
    }, [boardConfig]);

    const updatePoints = (word) => {
        let currentPoints = points;

        // TODO: points system
        currentPoints += word.length * 10 * (boardConfig.time - timer); // bigger word + less time = more points

        setPoints(currentPoints);
    };

    return (
        <div className="container">
            <main className="main-content">
                <ControlPanel
                    gameState={gameState}
                    onGameState={handleGameStart}
                    selectedLevel={selectedLevel}
                    onSelectLevel={handleSelectLevel}
                    customWords={customWords}
                    onCustomWords={handlCustomWords}
                />
                <GamePanel
                    boardConfig={boardConfig}
                    wordsList={words}
                    gameState={gameState}
                    onGameState={handleGameStart}
                    points={points}
                    onUpdatePoints={updatePoints}
                    timer={timer}
                />
                <GameOverModel
                    isOpen={gameState === GAME_STATES.GameOver}
                    points={points}
                    handleClose={() => setGameState(GAME_STATES.Ready)}
                />
            </main>
        </div>
    );
}

export default App;
