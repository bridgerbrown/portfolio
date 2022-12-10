import React from 'react'
import Image from 'next/image';

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
    <>
        <div className={`${styles["Bio-Container"]} ${styles["Section-container"]}`} id="bio">
          <div className={styles["section-line"]}>
            <Image src="../public/star1.png" className={styles["swirls"]}/>
            <h3 className='Section-Headers'>About</h3>
            <Image src="../public/star1.png" className={styles["swirls"]}/>
          </div>
          <div className={styles["Bio"]}>  
              <Image src="../public/B-cortona-gray.png" alt="bridger-headshot" className={styles["reveal-left"]} id='bio-img'/>
              <div className={`${styles["Bio-items"]} ${styles["reveal-right"]}`}>                    
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
                  <div className={styles["resume-section"]}>
                    <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer" >
                      <Image src="../public/LinkedIN_black.png" alt="LinkedIN icon" className={styles["Social-Icons"]}/>
                    </a>
                    <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer" >
                      <Image src="../public/Github_black.png" alt="Github icon"className={styles["Social-Icons"]}/>
                    </a>
                    <a href='https://www.instagram.com/bridger.brown/' target="_blank" rel="noopener noreferrer" > 
                      <Image src="../public/Instagram_black.png" alt="Instagram icon"className={styles["Social-Icons"]}/>
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