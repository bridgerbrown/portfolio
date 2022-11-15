import React from 'react'

function About() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal-left");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          }
        }
      }

      window.addEventListener("scroll", reveal)

      reveal()

    return(
        <div className='Bio-Container'>
            <h3 className='Section-Headers'>About</h3>
            <div className="Bio">  
                <img src="./src/assets/B-cortona.png" alt="bridger-headshot" class="reveal-left"/>
                <div className="Bio-items reveal-right">                    
                    <p>Hello, my name is Bridger Brown and I am a Front-End Web developer based out of Portland, Oregon. 
                        I have experience in Graphic Design which allows me to see websites from a designers mindset.
                        <br></br>
                        <br></br>
                        I am also a musician who graduated from Berklee College of Music in 2016 with a Bachelors in Guitar Performance.
                        I have a lot of passion for music, art, design, and self-improvement.
                    </p>
                </div> 
            </div>
            <button className='readmore'>Resume</button> 
        </div>
    )
}

export default About