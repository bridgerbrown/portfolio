import React from 'react'
import { useEffect, useState } from 'react'

function Landing(props) {
    const [darkLand, setDarkLand] = useState(props.darkTheme)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        if(props.darkTheme === true){
            setDarkLand(true)
        } else if (props.darkTheme === false) {
            setDarkLand(false)
        } else {
            setDarkLand(prefersDarkScheme)
        }
    }, [props.darkTheme])

    return(
        <div className='Landing-Page'>
            <div className='Landing-box'>
                <div className='Landing-Text'>
                    <h1>Bridger Brown</h1>
                    <h2>Front-End Web Developer + Designer</h2>
                </div>
                <div className='landpages'>
                    {
                        darkLand ?
                        <img src='./src/assets/wave-dark.jpg' className="fade" id='land-bg'/>
                        :
                        <img src='./src/assets/wave-light.jpg' className="fade" id='land-bg2'/>
                    }

                </div>
            </div>
        </div>
    )
}

export default Landing