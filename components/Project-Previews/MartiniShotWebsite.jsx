import React from 'react'
import Image from 'next/image'

function MartiniShotWebsite() {
return(
    <>
        <div className='project-single-container'>
            <div className='project-img'>
                <a href='www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                    <Image 
                        src='/./../public/martini-shot-preview.jpg' 
                        alt="martini shot project preview" 
                        className='Work-Preview reveal-left'
                        width="1280"
                        height="960"
                        />
                </a>
            </div>
            <div className='Work-Details reveal-right'>
                <div className='project-text'>
                    <a href='www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                        <h4>Martini Shot Podcast Website</h4>
                    </a>
                    <p>A website for the podcast Martini Shot with writer and TV producer Rob Long (Cheers, Sullivan & Son).
                        This was one of my first website projects and was built using Wordpress, HTML, and CSS.
                        <br></br>
                        <br></br>
                        In addition to managing the website, I am also the audio producer/editor and designed the Martini Shot logo.</p>
                </div>
                <div className='project-buttons'>
                <a href='www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                    <button className='ReadMore'>Preview</button>
                </a>
                </div>    
            </div>
        </div>
    </>
)
}

export default MartiniShotWebsite