import "./assets/styles/App.css"
import React from 'react';
import {
    ControlPanel,
    Header,
} from "./components"

function App() {
    return (
        <div>
            <Header />
            <main>
                <ControlPanel />
            </main>
        </div>
    )
}
export default App;