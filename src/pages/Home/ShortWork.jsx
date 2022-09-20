import React from 'react'
import MartiniShot from './work/MartiniShot'

function ShortWork() {
    return(
        <div className='Section-Container'>
            <h3 className='Section-Headers'>Work</h3>
            <div className='Work-Container'>
                <MartiniShot />
            </div>
            <button className='More'>Work ></button>
        </div>
    )
}

export default ShortWork