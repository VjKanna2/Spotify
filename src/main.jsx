import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContext from './context/PlayerContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <PlayerContext>
                <App />
            </PlayerContext>
        </BrowserRouter>
    </StrictMode>,
)