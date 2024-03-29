import React from 'react'
import EcommerceProject from '../sections/project-previews/EcommerceProject'
import MartiniShotWebsite from '../sections/project-previews/MartiniShotWebsite'
import QuizProject from '../sections/project-previews/QuizProject'
import Image from 'next/image'
import PayCats from './project-previews/Paycats'
import RicochetProductionsProject from './project-previews/RicochetProductions'

function Projects() {
    return(
        <>
            <section className='Section-Container' id="projects">
                <div className='section-line'>
                <Image 
                    src={"/star1.png"} 
                    className="swirls"
                    width={25}
                    height={25}
                    alt="swirl icon"
                />
                    <h3 className='Section-Headers'>Projects</h3>
                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                </div>
                <div className='Work-Container'>
                    <RicochetProductionsProject />
                    <PayCats />
                    <EcommerceProject />
                    <QuizProject />
                    <MartiniShotWebsite />
                </div>
            </section>
        </>
    )
}

export default Projects