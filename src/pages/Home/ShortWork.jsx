import React from 'react'
import MartiniShotShort from './work-short/MartiniShotShort'

function ShortWork() {
    return(
        <div className='Section-Container'>
            <h3 className='Section-Headers'>Work</h3>
            <div className='Work-Container'>
                <MartiniShotShort />
            </div>
            <button className='More'>Work ></button>
        </div>
    )
}

export default ShortWork