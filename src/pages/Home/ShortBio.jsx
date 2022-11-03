import React from 'react'

function ShortBio() {
    return(
        <div className='Bio-Container'>
            <h3 className='Section-Headers'>About</h3>
            <div className="Bio">  
                <img src="./src/assets/B-cortona.png" alt="bridger-headshot" />
                <div className="Bio-items">                    
                    <p>Hello, my name is Bridger Brown and I am a Front-End Web developer based out of Portland, Oregon. 
                        I have experience in Graphic Design which allows me to see websites from a designers mindset.
                        <br></br>
                        <br></br>
                        I am also a musician who graduated from Berklee College of Music in 2016 with a Bachelors in Guitar Performance.
                        I have a lot of passion for music, art, design, and self-improvement.
                    </p>
                </div> 
            </div>
            <button>Resume</button> 
        </div>
    )
}

export default ShortBio