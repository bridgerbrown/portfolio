import React from 'react'
import EcommerceProject from './projects/EcommerceProject'
import QuizProject from './projects/QuizProject'
import ThirdProject from './projects/ThirdProject'

function ShortWork() {
    return(
        <div className='Section-Container section-space'>
            <h3 className='Section-Headers'>Projects</h3>
            <div className='Work-Container'>
                <EcommerceProject />
                <QuizProject />
                <ThirdProject />
            </div>
            <div className='coming-soon'>
                <h3>More coming soon...</h3>
            </div>
        </div>
    )
}

export default ShortWork