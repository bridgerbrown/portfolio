import React from 'react'
import Image from 'next/image'

function QuizProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-img'>
                    <a href='https://quiz-o8z5ipsoe-bridgerbrown.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={'/quizzical-preview.jpg'}
                            alt="quiz project preview" 
                            className='Work-Preview reveal-left'
                            width={1280}
                            height={960}
                            />
                    </a>
                </div>
                <div className='Work-Details reveal-right'>
                <div className='project-text'>
                    <a href='https://quiz-o8z5ipsoe-bridgerbrown.vercel.app/' target="_blank" rel="noopener noreferrer" className='project-title'>
                        <h4>Quiz App</h4>
                    </a> 
                    <p className='project-description'>
                        A trivia question game with multiple categories and difficulties, this <span>React</span> app fetches data from the <span>Open Trivia Database API</span>.
                        This project started out as a part of the Scrimba Front-End Developer Career Path but was fleshed out more on its own. 
                    </p>
                    </div>
                    <div className='project-buttons'>
                        <a href='https://quiz-o8z5ipsoe-bridgerbrown.vercel.app/' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Preview
                        </a>                        
                        <a href='https://github.com/bridgerbrown/quiz-app-project' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Github
                        </a>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default QuizProject