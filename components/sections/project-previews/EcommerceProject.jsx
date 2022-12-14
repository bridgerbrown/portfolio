import React from 'react'
import Image from 'next/image';

function EcommerceProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-img'>
                    <a href='https://ecommerce-paintings-qp6emzax8-bridgerbrown.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={'/ecommerce-preview.jpg' }
                            alt="ecommerce preview" 
                            className='Work-Preview reveal-left'
                            width={1280}
                            height={960}
                            />
                    </a>
                </div>
                <div className='Work-Details reveal-right'>
                <div className='project-text'>
                    <a href='https://ecommerce-paintings-qp6emzax8-bridgerbrown.vercel.app/' target="_blank" rel="noopener noreferrer" className='project-title'>
                        <h4>eCommerce app</h4>
                    </a>
                    <p className='project-description'>
                        A demo eCommerce website with features such as a database of dynamically updating products, cart functionality, and email user authentication.
                        <br/>
                        <br/>
                        This project was made using <span>React</span>, <span>NextJS</span> (server-side and static rendering), <span>Firestore</span> database, <span>Firebase</span> user authentication and 
                        the art database of the <span>Art Institute of Chicago's public API</span>. 
                    </p>
                    </div>
                    <div className='project-buttons'>
                        <a href='https://ecommerce-paintings-qp6emzax8-bridgerbrown.vercel.app/' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Preview
                        </a>
                        <a href='https://github.com/bridgerbrown/ecommerce-basic' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Github
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default EcommerceProject