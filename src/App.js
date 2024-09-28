import { WINDOWS_HEIGHT, WINDOWS_WEIGHT } from './constants';
import { Background, WordSearch } from './components';
import Logo from './assets/SopaDeLetras-Logo.png';
import './assets/styles/App.css';

function App() {
    return (
        <>
            <div className="container">
                <main className="main-content">
                    <img src={Logo} alt="Sopa de Letras" />
                    <WordSearch />
                </main>
            </div>
            <Background height={WINDOWS_HEIGHT} weight={WINDOWS_WEIGHT} />
        </>
    );
}

export default App;
