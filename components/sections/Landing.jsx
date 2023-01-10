import React from 'react'
import Image from 'next/image'

function Landing() {
    return(
    <>
        <div className='Landing-Page' alt="landing page">
            <div className='Landing-box'>
                <div className='Landing-Text'>
                    <h1>Bridger Brown</h1>
                    <h2>Front-End Web Developer + Designer</h2>
                </div>
                <div className='landpages'>
                    <Image 
                        src={'/wave-dark.jpg'}
                        className="fade" 
                        id='land-bg'
                        width="4000"
                        height="2860"
                        alt='Landing page swirl image'
                        />
                </div>
            </div>
        </div>
    </>
    )
}

export default Landing