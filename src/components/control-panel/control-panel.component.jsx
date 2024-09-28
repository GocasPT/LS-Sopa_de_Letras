import { useState } from 'react';
import { GAME_STATES, LEVELS } from '../../constants';
import './control-panel.css';

function ControlPanel({
    gameState,
    onGameState,
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
        <section id="panel-control">
            <form className="form">
                <fieldset className="form-group">
                    <label htmlFor="btLevel">Nível:</label>
                    <select
                        id="btLevel"
                        value={selectedLevel}
                        disabled={gameState === GAME_STATES.InGame}
                        onChange={handleLevelChange}>
                        <option value={LEVELS.Default.value}>
                            {LEVELS.Default.text}
                        </option>
                        <option value={LEVELS.Easy.value}>
                            {LEVELS.Easy.text}
                        </option>
                        <option value={LEVELS.Medium.value}>
                            {LEVELS.Medium.text}
                        </option>
                        <option value={LEVELS.Hard.value}>
                            {LEVELS.Hard.text}
                        </option>
                    </select>
                </fieldset>
                <button
                    disabled={gameState === GAME_STATES.InGame}
                    onClick={() =>
                        setShowCustomWords((prevState) => !prevState)
                    }>
                    Custom words
                </button>
                {showCustomWords && (
                    <fieldset className="form-group">
                        <label htmlFor="btCustomWords">Custom words:</label>
                        <input
                            id="btCustomWords"
                            type="text"
                            placeholder="Add your word"
                            value={wordInput}
                            disabled={gameState === GAME_STATES.InGame}
                            onChange={(event) =>
                                setWordInput(event.target.value)
                            }
                        />
                        <button
                            id="btAddCustomWord"
                            disabled={gameState === GAME_STATES.InGame}
                            onClick={() => handleAddCustomWord(wordInput)}>
                            Add
                        </button>
                        <ul>
                            {customWords.map((word, index) => (
                                <li key={index}>{word}</li>
                            ))}
                        </ul>
                    </fieldset>
                )}
                <button
                    id="btPlay"
                    onClick={onGameState}
                    disabled={
                        gameState === GAME_STATES.InGame ||
                        selectedLevel === LEVELS.Default.value
                    }>
                    {gameState === GAME_STATES.InGame ? 'In game...' : 'Start'}
                </button>
            </form>
        </section>
    );
}

export default ControlPanel;
