import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Nav2 = () => {

    const navigate = useNavigate();
    const url = useLocation();
    const isActive = (path) => url.pathname === path;

    return (
        <div className='flex items-center gap-2 mt-6'>
            <button
                className={`px-3 py-1 rounded-full ${isActive('/') ? 'bg-white text-black' : 'bg-[#363636] hover:bg-[#3E3E3E]'}`}
                onClick={() => navigate('/')}
            >
                All
            </button>
            <button
                className={`px-3 py-1 rounded-full ${isActive('/music') ? 'bg-white text-black' : 'bg-[#363636] hover:bg-[#3E3E3E]'}`}
                onClick={() => navigate('/music')}
            >
                Music
            </button>
            <button
                className={`px-3 py-1 rounded-full ${isActive('/podcasts') ? 'bg-white text-black' : 'bg-[#363636] hover:bg-[#3E3E3E]'}`}
                onClick={() => navigate('/podcasts')}
            >
                Podcasts
            </button>
        </div>
    )
}

export default Nav2