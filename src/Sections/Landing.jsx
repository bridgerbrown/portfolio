import React, { useState } from 'react'
import { useEffect } from 'react'

function Landing(props) {
    return(
        <div className='Landing-Page'>
            <div className='Landing-box'>
                <div className='Landing-Text'>
                    <h1>Bridger Brown</h1>
                    <h2>Front-End Web Developer + Designer</h2>
                </div>
                {
                    props.darkLand ?
                    <img src='./src/assets/underswirl-darkmode.png' id='land-bg'/>
                    :
                    <img src='./src/assets/underswirl-lighter.png' id='land-bg'/>
                }
            </div>
        </div>
    )
}

export default Landing