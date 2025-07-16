import React from 'react'
import { assets } from '../utils/assets.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

const SideBar = () => {

    const navigate = useNavigate();
    const url = useLocation();
    const isActive = (path) => url.pathname === path;

    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[17%] rounded-lg flex flex-col justify-evenly'>
                <div
                    className={`flex items-center gap-3 pl-6 cursor-pointer ${isActive('/') ? 'text-white' : 'text-[#b3b3b3] opacity-50'}`}
                    onClick={() => navigate('/')}
                >
                    <img src={assets.home_icon} className='w-6' />
                    <p className='font-bold'>Home</p>
                </div>
                <div
                    className={`flex items-center gap-3 pl-6 cursor-pointer ${isActive('/search') ? 'text-white' : 'text-[#b3b3b3] opacity-50'}`}
                    onClick={() => navigate('/search')}
                >
                    <img src={assets.search_icon} className='w-6' />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[83%] rounded-lg'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3 pl-2 opacity-50 hover:opacity-100 cursor-pointer'>
                        <img src={assets.library_icon} className='w-6' />
                        <p data-tooltip-target="tooltip-default" className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-5 mr-3">
                        <img src={assets.plus_icon} className="w-4 cursor-pointer opacity-70 hover:opacity-100" />
                        <img src={assets.arrow_icon} className="w-4 cursor-pointer opacity-70 hover:opacity-100" />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 mt-5 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p>It's easy, we'll help you</p>
                    <button className='text-black bg-white rounded-full px-4 py-1.5 text-[15px] mt-4 hover:-translate-y-0.5'>
                        Create Playlist
                    </button>
                </div>
                <div className='p-4 bg-[#242424] m-2 mt-5 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Let's find ome podcasts to follow</h1>
                    <p>We'll keep you updated on new episodes</p>
                    <button
                        className='text-black bg-white rounded-full px-4 py-1.5 text-[15px] mt-4 hover:-translate-y-0.5'
                        onClick={() => navigate('/podcasts')}
                    >
                        Browse podcasts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar