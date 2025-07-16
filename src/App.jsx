import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import MusicPlayer from './components/MusicPlayer'
import { MusicContext } from './context/PlayerContext'
import DisplayPage from './components/DisplayPage'

const App = () => {

    const { audioRef, song } = useContext(MusicContext);

    return (
        <div className="h-screen bg-black">
            <div className='h-[90%] flex'>
                <SideBar />
                <DisplayPage />
            </div>
            <MusicPlayer />
            <audio ref={audioRef} src={song.file} preload='auto'></audio>
        </div>
    )
}

export default App