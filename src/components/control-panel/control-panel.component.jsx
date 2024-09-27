import { useState } from 'react';
import './control-panel.css';

function ControlPanel({
    gameStarted,
    onGameStart,
    selectedLevel,
    onSelectLevel,
    customWords,
    onCustomWords,
}) {
    const [showCustomWords, setShowCustomWords] = useState(false);
    const [wordInput, setWordInput] = useState('');

    const handleLevelChange = (event) => {
        onSelectLevel(event.target.value);
    };

    const handleAddCustomWord = (word) => {
        onCustomWords((prevCustomWords) => [...prevCustomWords, word]);
    };

    return (
        <div className="control-panel">
            <select value={selectedLevel} onChange={handleLevelChange}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button
                onClick={() => setShowCustomWords((prevState) => !prevState)}>
                Custom words
            </button>
            {showCustomWords && (
                <div>
                    <input
                        type="text"
                        placeholder="Add your word"
                        value={wordInput}
                        onChange={(event) => setWordInput(event.target.value)}
                    />
                    <button onClick={() => handleAddCustomWord(wordInput)}>
                        Add
                    </button>
                    <ul>
                        {customWords.map((word, index) => (
                            <li key={index}>{word}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={onGameStart} disabled={gameStarted}>
                {gameStarted ? 'In game...' : 'Start'}
            </button>
        </div>
    );
}

export default ControlPanel;
