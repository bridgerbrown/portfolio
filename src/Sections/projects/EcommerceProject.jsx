import React from 'react'

function EcommerceProject() {
    return(
        <div className='project-single-container'>
            <img src='./src/assets/mars_bg.jpg' alt="quiz Work preview" className='Work-Preview reveal-left'/>
            <div className='Work-Details reveal-right'>
                <div className='project-text'>
                <h4>eCommerce app</h4>
                <p>Lorem, iping elit. Aperiam, nam rerum deleniti sunt magni corporis.</p>
                </div>
                <div className='project-buttons'>
                    <button className='ReadMore'>Live</button>
                    <button className='ReadMore'>Github</button>
                </div>  
            </div>
        </div>
    )
}

export default EcommerceProject