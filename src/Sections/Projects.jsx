import React from 'react'
import EcommerceProject from './Project-Previews/EcommerceProject'
import QuizProject from './Project-Previews/QuizProject'
import ThirdProject from './Project-Previews/ThirdProject'

function Projects() {
    return(
        <div className='Section-Container' id="projects">
            <div className='section-line'>
              <img src="./src/assets/star1.png" className='swirls'/>
              <h3 className='Section-Headers'>Projects</h3>
              <img src="./src/assets/star1.png" className='swirls'/>
            </div>
            <div className='Work-Container'>
                <EcommerceProject />
                <QuizProject />
            </div>
            <div className='coming-soon'>
                <h3>More coming soon...</h3>
            </div>
        </div>
    )
}

export default Projects