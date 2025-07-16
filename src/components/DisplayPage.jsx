import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import AlbumView from './AlbumView'
import Search from './Search'
import { albumsData } from '../utils/assets'
import Music from './Music'
import Podcasts from './Podcasts'

const DisplayPage = () => {

    const displayRef = useRef();

    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.split('/').pop() : '';
    const bgColor = albumsData[Number(albumId)].bgColor;

    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        } else {
            displayRef.current.style.background = 'linear-gradient(#202020, #121212)'; // #202020 - black, #121212 - dark black
        }
    }, []);

    return (
        <div ref={displayRef} className='w-[100%] m-2 rounded-xl text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<AlbumView />} />
                <Route path='/search' element={<Search />} />
                <Route path='/music' element={<Music />} />
                <Route path='/podcasts' element={<Podcasts />} />
            </Routes>
        </div>
    )
}

export default DisplayPage