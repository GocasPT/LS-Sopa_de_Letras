import './control-panel.css'

function ControlPanel({
    levels,
    selectedLevel,
    onSelectLevel,
    isGameStarted,
    onGameStart,
}) {
    return (
        <section>
            <form>
                <fieldset disabled={isGameStarted}>
                    <label htmlFor="selectLevel">Level: </label>
                    <select
                        id="selectLevel"
                        onChange={(event) => onSelectLevel(event.target.value)}
                    >
                        {levels.map((level, index) => (
                            <option key={index} value={level.value}>
                                {level.text}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <button
                    disabled={
                        selectedLevel === levels[0].value || isGameStarted
                    }
                    onClick={onGameStart}
                >
                    {isGameStarted ? 'In game...' : 'Start'}
                </button>
            </form>
        </section>
    )
}

export default ControlPanel
