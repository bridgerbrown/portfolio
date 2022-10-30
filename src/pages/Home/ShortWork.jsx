import React from 'react'
import MartiniShotShort from './work-short/MartiniShotShort'

function ShortWork() {
    return(
        <div className='Section-Container section-space'>
            <h3 className='Section-Headers'>Projects</h3>
            <div className='Work-Container'>
                <MartiniShotShort />
                <MartiniShotShort />
                <MartiniShotShort />
            </div>
            <button className='More'>Work</button>
        </div>
    )
}

export default ShortWork