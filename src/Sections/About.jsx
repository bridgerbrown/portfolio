import React from 'react'

function About() {
    function revealLeft() {
        let reveals = document.querySelectorAll(".reveal-left");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      function revealRight() {
        let reveals = document.querySelectorAll(".reveal-right");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", revealLeft)
      window.addEventListener("scroll", revealRight)

      revealLeft()
      revealRight()

    return(
        <div className='Bio-Container' id="bio">
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
                    <div className='resume-section'>
                      <img src="../src/assets/LinkedIN_black.png" alt="LinkedIN icon" className='Social-Icons'/>
                      <img src="../src/assets/Github_black.png" alt="Github icon"className='Social-Icons'/>
                      <img src="../src/assets/Instagram_black.png" alt="Instagram icon"className='Social-Icons'/>
                      <button>Resume</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About