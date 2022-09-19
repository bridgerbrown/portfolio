import React from 'react'
import NotesProject from './projects/NotesProject'
import QuizProject from './projects/QuizProject'
import ThirdProject from './projects/ThirdProject';
import { Carousel } from '@trendyol-js/react-carousel';

function Projects() {
    return(
        
        <div className='Section-Container-Carousel'>
                <h3 className='Section-Headers'>Projects</h3>
            <div className='Projects-Container'>
                <Carousel show={2.5} slide={0.5} swiping={true} infinite={false} >
                    <NotesProject />
                    <QuizProject />
                    <ThirdProject />
                </Carousel>
            </div>
            <button className='More'>More Projects</button>
        </div>
    )
}

export default Projects