import React from 'react'
import Image from 'next/image'

function QuizProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-img'>
                    <Image 
                        src='/./../public/quizzical-preview.png' 
                        alt="quiz project preview" 
                        className='Work-Preview reveal-left'
                        width="1280"
                        height="960"
                        />
                </div>
                <div className='Work-Details reveal-right'>
                <div className='project-text'>
                    <h4>Quiz App</h4>
                    <p>
                        A trivia question game with multiple categories and difficulties that uses the data of Open Trivia Database API,
                        this project started out as a part of the Scrimba Front-End Developer Career Path but was fleshed out more on its own. 
                    </p>
                    </div>
                    <div className='project-buttons'>
                        <button className='ReadMore'>Preview</button>
                        <a href='https://github.com/bridgerbrown/quiz-app-project' target="_blank" rel="noopener noreferrer">
                            <button className='ReadMore'>Github</button>
                        </a>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default QuizProject