import React from 'react'
import EcommerceProject from './Project-Previews/EcommerceProject'
import MartiniShotWebsite from './Project-Previews/MartiniShotWebsite'
import QuizProject from './Project-Previews/QuizProject'
import '../public/ecommerce-preview.png'
import Image from 'next/image'

function Projects() {
    return(
        <>
            <div className='Section-Container' id="projects">
                <div className='section-line'>
                <Image 
                    src={"star1.png"} 
                    className="swirls"
                    width={25}
                    height={25}
                />
                    <h3 className='Section-Headers'>Projects</h3>
                    <Image 
                        src={"star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                    />
                </div>
                <div className='Work-Container'>
                    <EcommerceProject />
                    <QuizProject />
                    <MartiniShotWebsite />
                </div>
                <div className='coming-soon'>
                    <h3>More coming soon...</h3>
                </div>
            </div>
        </>
    )
}

export default Projects