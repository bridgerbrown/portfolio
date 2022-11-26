import React from 'react'

function EcommerceProject() {
    return(
        <div className='project-single-container'>
            <img src='./src/assets/ecommerce-preview.png' alt="ecommerce preview" className='Work-Preview reveal-left'/>
            <div className='Work-Details reveal-right'>
                <div className='project-text'>
                <h4>eCommerce app</h4>
                <p>
                    An eCommerce website using paintings from the Art Institute of Chicago's public API as products, this project uses such technology as 
                    React Router, React Context, Firebase Database, and Firestore User Authentication.
                </p>
                </div>
                <div className='project-buttons'>
                    <button className='ReadMore'>Test</button>
                    <button className='ReadMore'>Github</button>
                </div>  
            </div>
        </div>
    )
}

export default EcommerceProject