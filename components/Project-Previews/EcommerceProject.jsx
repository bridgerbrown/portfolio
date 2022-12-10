import React from 'react'
import Image from 'next/image';

function EcommerceProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-img'>
                    <Image 
                        src='/./../public/ecommerce-preview.png' 
                        alt="ecommerce preview" 
                        className='Work-Preview reveal-left'
                        width="1280"
                        height="960"
                        />
                </div>
                <div className='Work-Details reveal-right'>
                    <div className='project-text'>
                    <h4>eCommerce app</h4>
                    <p>
                        An eCommerce website using paintings from the Art Institute of Chicago's public API as products, this project uses such technology as 
                        React Router, React Context, Firebase Database, and Firestore User Authentication.
                    </p>
                    </div>
                    <div className='project-buttons'>
                        <a>
                        <button className='ReadMore'>Preview</button>
                        </a>
                        <a href='https://github.com/bridgerbrown/ecommerce-basic' target="_blank" rel="noopener noreferrer">
                            <button className='ReadMore'>Github</button>
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default EcommerceProject