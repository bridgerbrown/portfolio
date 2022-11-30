import React, { useState } from 'react'
import { useEffect } from 'react'

function Landing(props) {
    console.log(props.darkLand)

    return(
        <div className='Landing-Page'>
            <div className='Landing-box'>
                <div className='Landing-Text'>
                    <h1>Bridger Brown</h1>
                    <h2>Front-End Web Developer + Designer</h2>
                </div>
                <div className='landpages'>
                    {
                        !props.darkLand ?
                        <img src='./src/assets/wave-light.png' key={props.darkLand} className="fade" id='land-bg'/>
                        :
                        <img src='./src/assets/wave-dark.png' key={props.darkLand} className="fade" id='land-bg2'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Landing