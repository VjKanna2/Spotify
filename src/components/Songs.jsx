import React, { useContext } from 'react'
import { MusicContext } from '../context/PlayerContext'

const Songs = ({ image, name, desc, id }) => {

    const { playSpecific } = useContext(MusicContext);

    return (
        <div onClick={() => playSpecific(id)} className='min-w-[180px] hover:bg-[#3E3E3E] p-2 px-3 rounded cursor-pointer'>
            <img className='rounded' src={image} />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}

export default Songs