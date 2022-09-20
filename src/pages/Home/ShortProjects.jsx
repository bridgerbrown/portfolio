import React from 'react'
import NotesProject from './projects/NotesProject'
import QuizProject from './projects/QuizProject'
import ThirdProject from './projects/ThirdProject';
import { Carousel } from '@trendyol-js/react-carousel';

function ShortProjects() {
    return(
        
        <div className='Section-Container-Carousel'>
                <h3 className='Section-Headers'>Projects</h3>
            <div className='Projects-Container'>
                <Carousel show={2.5} slide={0.5} swiping={true} infinite={false} transition={0.2}>
                    <NotesProject />
                    <QuizProject />
                    <ThirdProject />
                </Carousel>
            </div>
            <button className='More'>Projects ></button>
        </div>
    )
}

export default ShortProjects