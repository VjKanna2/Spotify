import React, { useContext } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../utils/assets'
import { MusicContext } from '../context/PlayerContext'

const AlbumView = () => {

    const { id } = useParams();
    const currentAlbum = albumsData[id];
    const { playSpecific } = useContext(MusicContext);
    // const bgColor = `linear-gradient(${currentAlbum.bgColor}, #121212)` ,  style={{background: bgColor}}

    return (
        <div className='px-6 pt-4'>
            <Nav />
            <div className='mt-10 flex gap-8 flex-col items-center sm:flex-row md:items-end'>
                <img className='w-36 sm:w-40 rounded ' src={currentAlbum.image} />
                <div className='flex flex-col items-center sm:items-start'>
                    <p>Playlist</p>
                    <h2 className='text-4xl font-bold mb-4 md:text-5xl'>{currentAlbum.name}</h2>
                    <h4 className=' hidden sm:block'>{currentAlbum.desc}</h4>
                    <p className='mt-1 hidden sm:block'>
                        <img className='w-5 inline-block -mt-1' src={assets.spotify_logo} />
                        &nbsp;<b>Spotify</b>
                        &nbsp;&#8226; 1,23,456 likes
                        &nbsp;&#8226; <b>12 Songs,</b>
                        &nbsp;&#8226; about 40 mins
                    </p>
                </div>
            </div>
            <div className='flex mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p className='flex-grow basis-[45%] [@media(max-width:500px)]:basis-[90%]'><b className='mr-4'>#</b> Title</p>
                <p className='flex-grow basis-[20%] [@media(max-width:750px)]:hidden'>Album</p>
                <p className='hidden sm:block flex-grow basis-[20%]'>Artist</p>
                <div className='flex-grow basis-[15%] flex justify-center items-center [@media(max-width:390px)]:hidden [@media(max-width:500px)]:basis-[7%]'>
                    <img className='w-4' src={assets.clock_icon} />
                </div>
            </div>

            <hr />
            {songsData.map((song, index) => {
                return (
                    <div key={index} onClick={() => (playSpecific(song.id))} className='flex p-2 my-2 items-center text-[#B3B3B3] hover:bg-[#ffffff2b] rounded cursor-pointer'>
                        <p className='flex-grow basis-[45%] [@media(max-width:500px)]:basis-[90%]'>
                            <span className='mr-5'>{song.id + 1}</span>
                            <img className='inline mr-5 w-10 rounded' src={song.image} />
                            <span className='text-white'>{song.name}</span>
                        </p>
                        <p className='text-[15px] ml-1 flex-grow basis-[20%] [@media(max-width:750px)]:hidden'>{song.album}</p>
                        <p className='hidden sm:block text-[15px] ml-1 flex-grow basis-[20%]'>{song.artist}</p>
                        <p className='text-[15px] text-center flex-grow basis-[15%] [@media(max-width:390px)]:hidden [@media(max-width:500px)]:basis-[7%]'>{song.duration}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumView