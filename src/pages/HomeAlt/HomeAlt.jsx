import React from 'react'
import HomeNav from '../HomeAlt/HomeNav/HomeNav'
import '../HomeAlt/homealt.css'

function HomeAlt() {
    return(
        <div className='Home-Alt'>
            <div className='Home-Text'>
                <div className='Title'>
                    <h1>BRIDGER<span>.dev</span></h1>
                </div>
                <HomeNav />
            </div>
            <img src='./src/assets/mars.png' alt='mars sphere' />
        </div>
    )
}

export default HomeAlt