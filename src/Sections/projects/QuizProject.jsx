import React from 'react'

function QuizProject() {
    return(
        <div className='project-single-container'>
            <img src='./src/assets/quizzical-preview.png' alt="quiz project preview" className='Work-Preview reveal-left'/>
            <div className='Work-Details reveal-right'>
                <div className='project-text'>
                <h4>Quiz App</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam rerum deleniti sunt magni corporis.</p>
                </div>
                <div className='project-buttons'>
                    <button className='ReadMore'>Live</button>
                    <button className='ReadMore'>Github</button>
                </div>    
            </div>
        </div>
    )
}

export default QuizProject