import React, { useState } from 'react'
import Nav from './Nav'
import { assets } from '../utils/assets'

const Search = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <div className='px-6 pt-4 bg-[#121212] h-[100%]'>
            <Nav />
            <div className='relative w-[75%] sm:w-[40%] [@media(max-width:385px)]:w-[100%]  mt-6'>
                <img
                    src={assets.search_icon}
                    className='absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2 z-10'
                />
                <input
                    type="text"
                    className='w-full pl-10 p-3 rounded-full bg-[#242424] border-none text-white placeholder-[#757575]'
                    placeholder='What do you want to play?'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    disabled={false}
                />
            </div>
        </div>
    )
}

export default Search