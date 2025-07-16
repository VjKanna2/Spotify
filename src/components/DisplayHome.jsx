import React from 'react'
import Nav from './Nav'
import { albumsData, songsData } from '../utils/assets'
import Albums from './Albums'
import Songs from './Songs'
import Nav2 from './Nav2'

const DisplayHome = () => {
    return (
        <div className='px-6 pt-4'>
            <Nav />
            <Nav2 />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl hover:underline cursor-pointer'>Featured Charts</h1>
                <div className="flex overflow-auto scrollbar-none">
                    {albumsData.map((item, index) => {
                        return <Albums key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
                    })}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl hover:underline cursor-pointer'>Today's hitlist</h1>
                <div className="flex overflow-auto scrollbar-none">
                    {songsData.map((item, index) => {
                        return <Songs key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default DisplayHome