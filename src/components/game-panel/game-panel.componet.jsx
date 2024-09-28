import { useEffect, useState } from 'react';
import { Time, Board } from '../';
import { COLORS, GAME_STATES } from '../../constants';
import { generateBoard, fillBoardWithWords, getWord } from '../../helpers';
import './game-panel.css';

function GamePanel({
    boardConfig,
    wordsList,
    gameState,
    onGameState,
    points,
    onUpdatePoints,
    timer,
}) {
    const [board, setBoard] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [cellsWords, setCellsWords] = useState([]);

    const handleClickCell = (row, col) => {
        if (gameState === GAME_STATES.InGame) {
            // TODO: temp highlight cell (div layer and move on mouse)

            setSelectedCells((previouseState) => [
                ...previouseState,
                { row, col },
            ]);
        }
    };

    const clearStates = () => {
        setFoundWords([]);
        setSelectedCells([]);
        setCellsWords([]);
    };

    const checkWord = () => {
        const [cell1, cell2] = selectedCells;
        const selectedWord = getWord(cell1, cell2, board);

        wordsList.forEach((word) => {
            word = word.toUpperCase();

            if (
                word === selectedWord ||
                word === selectedWord.split('').reverse().join('')
            ) {
                setFoundWords((previouseState) => [...previouseState, word]);
                onUpdatePoints(word); // TODO: see this part (handle from App.js)
            }
        });

        setSelectedCells([]);
        setCellsWords((previouseState) => [
            ...previouseState,
            {
                cell1,
                cell2,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            },
        ]);
    };

    // TODO: see this useEffect
    useEffect(() => {
        if (wordsList.length === 0) {
            setBoard(generateBoard(boardConfig.size));
        } else {
            setBoard(fillBoardWithWords(boardConfig.size, wordsList));
            clearStates();
        }
    }, [boardConfig, wordsList]);

    useEffect(() => {
        if (selectedCells.length === 2) {
            checkWord();
        }
    }, [selectedCells]);

    // TODO: see this useEffect
    useEffect(() => {
        if (
            gameState === GAME_STATES.InGame &&
            foundWords.length === wordsList.length
        ) {
            onGameState(GAME_STATES.GameOver);
        }
    }, [foundWords]);

    if (board.length === 0) {
        return null;
    }

    return (
        <section className="main-content game-panel">
            {wordsList.length > 0 && (
                <div className="game-panel-info">
                    {/* TODO: improve UI */}
                    <Time time={timer} />
                    <div className="score">
                        <span className="score-value">{points} pt</span>
                    </div>
                </div>
            )}
            {wordsList.length > 0 && (
                <ul className="words-list">
                    {/* TODO: improve UI */}
                    {wordsList.map((word, index) => (
                        <li
                            key={index}
                            className={
                                foundWords.includes(word.toUpperCase())
                                    ? 'done'
                                    : ''
                            }>
                            {word}
                        </li>
                    ))}
                </ul>
            )}
            {/* TODO: if game is ready/over, buttons disable */}
            <Board
                board={board}
                boardSize={boardConfig.size}
                onSelect={handleClickCell}
                cellsWords={cellsWords}
            />
        </section>
    );
}

export default GamePanel;
