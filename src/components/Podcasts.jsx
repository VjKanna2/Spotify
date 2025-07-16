import React from 'react'
import Nav from './Nav'
import Nav2 from './Nav2'

const Podcasts = () => {
    return (
        <div className='px-6 pt-4'>
            <Nav />
            <Nav2 />
            <div className='p-10 mt-5'>
                <p className='p-10 text-center'>Coming soon..</p>
            </div>
        </div>
    )
}

export default Podcasts