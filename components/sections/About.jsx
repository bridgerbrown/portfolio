import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';

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

    useEffect(() => {
      window.addEventListener("scroll", revealLeft)
      window.addEventListener("scroll", revealRight)
      revealLeft()
      revealRight()
    }, [])

  return(
    <>
      <div className='Bio-Container Section-container' id="bio">
          <div className='section-line'>
            <Image 
              src={"/star1.png"} 
              className="swirls"
              width={25}
              height={25}
              />
            <h3 className='Section-Headers'>About</h3>
            <Image 
              src={"/star1.png"} 
              className="swirls"
              width={25}
              height={25}
              />
          </div>
          <div className="Bio">  
              <Image 
                src={"/cortona-headshot.png"}
                alt="bridger headshot" 
                className='reveal-left' 
                id='bio-img'
                width={352}
                height={352}
                />
              <div className="Bio-items reveal-right">                    
                  <p>Hello, my name is Bridger Brown and I am a Front-End Web developer and designer based out of Portland, Oregon. 
                      I have experience in Graphic Design which allows me to see websites through a designers eye.
                      Websites are an interactive art form and I am passionate about creating that experience.
                      <br></br>
                      <br></br>
                      I am also a musician that graduated from Berklee College of Music in 2016 with a Bachelors in Guitar Performance.
                      I am very passionate in music, art, keyboards, and self-improvement.
                  </p>
                  {/* <div className='bio-other-buttons'>
                    <button>Education</button>
                    <button>Music</button>
                  </div> */}
                  <div className='resume-section'>
                    <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer" >
                      <Image 
                        src={"/LinkedIN_black.png"} 
                        alt="LinkedIN icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                    </a>
                    <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer" >
                      <Image 
                        src={"/Github_black.png"} 
                        alt="Github icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                    </a>
                    <a href='https://www.instagram.com/bridger.brown/' target="_blank" rel="noopener noreferrer" > 
                      <Image 
                        src={"/Instagram_black.png"} 
                        alt="Instagram icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                    </a>
                    <button>Resume</button>
                  </div>
              </div> 
          </div>
      </div>
    </>
  )
}

export default About