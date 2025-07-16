import React from 'react'
import Nav from './Nav'
import Nav2 from './Nav2'
import { songsData } from '../utils/assets'
import Songs from './Songs'

const Music = () => {

    return (
        <div className='px-6 pt-4'>
            <Nav />
            <Nav2 />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl hover:underline cursor-pointer'>Today's Hitlist</h1>
                <div className="flex overflow-auto scrollbar-none">
                    {songsData.map((item, index) => {
                        return (
                            <Songs
                                key={index}
                                name={item.name}
                                desc={item.desc}
                                image={item.image}
                                id={item.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Music