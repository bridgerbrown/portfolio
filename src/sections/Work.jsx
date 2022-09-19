import React from 'react'
import MartiniShot from './work/MartiniShot'

function Work() {
    return(
        <div className='Section-Container'>
            <h3 className='Section-Headers'>Work</h3>
            <div className='Work-Container'>
                <MartiniShot />
            </div>
            <button className='More'>More Work</button>
        </div>
    )
}

export default Work