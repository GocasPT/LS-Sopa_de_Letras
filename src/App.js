import { useState } from 'react';
import { LEVELS, LEVELS_CONFIG } from './constants';
import { ControlPanel, GamePanel } from './components';
import './assets/styles/App.css';

function App() {
  const levels = [{ value: '', text: '-- Select level --' }, ...LEVELS];

  const [boardConfig, setBoardConfig] = useState(LEVELS_CONFIG[0]);
  const [words, setWords] = useState([]);
  const [gameStart, setGameStart] = useState(false);

  const handleSelectLevel = (level) => {
    setBoardConfig(LEVELS_CONFIG.find((config) => config.value === level) || LEVELS_CONFIG[0]);
  };

  const handleGameStart = () => {
    setGameStart(true);

    //TODO: select words fomr list + custom words from user
    setWords(['Olá', 'Batata', 'Cenoura', 'Cebola', 'Alface']);
  };

  /*useEffect(() => {
		if (!gameStart) {
			//TODO: show alert message 'GAME OVER' (clear board or later?)
			setBoard([]);
			return;
		};
	}, [gameStart])*/

  return (
    <main>
      <ControlPanel
        levels={levels}
        selectedLevel={boardConfig.value}
        onSelectLevel={(level) => handleSelectLevel(level)}
        isGameStarted={gameStart}
        onGameStart={() => handleGameStart()}
      />
      <GamePanel boardSize={boardConfig.size} wordsList={words} />
    </main>
  );
}
export default App;
