import React from 'react'
import { assets } from '../utils/assets'
import { useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate();
    const url = useLocation();
    const isActive = (path) => url.pathname === path;

    return (
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img
                    src={assets.arrow_left}
                    className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
                    onClick={() => navigate(-1)}
                />
                <img
                    src={assets.arrow_right}
                    className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
                    onClick={() => navigate(1)}
                />
            </div>
            <div className='flex items-center gap-4'>
                <img
                    src={assets.search_icon}
                    className={`lg:hidden w-8 cursor-pointer ${isActive('/search') ? 'text-white' : 'text-[#b3b3b3] opacity-50'}`}
                    onClick={() => navigate('/search')}
                />
                <button className='hidden sm:flex rounded-full px-4 py-1 text-[15px] cursor-pointer text-black bg-white hover:-translate-y-0.5'>
                    Explore Premium
                </button>
                <button className='hidden sm:flex rounded-full px-3 py-1 text-[15px] cursor-pointer text-white bg-[#0E0E0E] hover:-translate-y-0.5'>
                    Install App
                </button>
                <img
                    src={assets.bell_icon}
                    className='w-8 bg-[#0E0E0E] p-2 rounded-2xl cursor-pointer hover:-translate-y-0.5'
                />
                <p className='bg-blue-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>
                    V
                </p>
            </div>
        </div>
    )
}

export default Nav