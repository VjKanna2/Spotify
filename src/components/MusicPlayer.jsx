import React, { useContext } from 'react'
import { assets } from '../utils/assets'
import { MusicContext } from '../context/PlayerContext'

const MusicPlayer = () => {

    const { song, seekBg, seekBar, isPlaying, duration, play, pause, prev, next, seek } = useContext(MusicContext);

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className="flex-grow basis-[20%] hidden lg:flex items-center gap-4">
                <img className='w-12 rounded' src={song.image} />
                <div>
                    <p>{song.name}</p>
                    <p>{song.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex-grow basis-[65%] flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
                    <img onClick={() => prev(song.id)} className='w-4 cursor-pointer' src={assets.prev_icon} />
                    {isPlaying ?
                        <img className='w-4 cursor-pointer' src={assets.pause_icon} onClick={pause} />
                        :
                        <img className='w-4 cursor-pointer' src={assets.play_icon} onClick={play} />
                    }
                    <img onClick={() => next(song.id)} className='w-4 cursor-pointer' src={assets.next_icon} />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} />
                </div>
                <div className="flex items-center gap-5">
                    <p>{duration.currentTime.minute}:{duration.currentTime.second}</p>
                    <div onClick={seek} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{duration.totalTime.minute}:{duration.totalTime.second}</p>
                </div>
            </div>
            <div className='flex-grow basis-[15%] hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} />
                <img className='w-4' src={assets.mic_icon} />
                <img className='w-4' src={assets.queue_icon} />
                <img className='w-4' src={assets.speaker_icon} />
                <img className='w-4' src={assets.volume_icon} />
                <div className='w-20 bg-slate-50 h-1 rounded'>
                </div>
                <img className='w-4' src={assets.mini_player_icon} />
                <img className='w-4' src={assets.zoom_icon} />
            </div>
        </div>
    )
}

export default MusicPlayer