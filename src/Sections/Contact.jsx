import React from "react";

function Contact() {
    function copyContact(){
        let email = 'bridgerbrowndev@gmail.com'
        navigator.clipboard.writeText(email);
        let button = document.getElementById("copy-button")
        button.innerText = "Copied! ✔"
    }

    return (
        <div className="contact-container Section-container" id="contact">
            <div className='section-line'>
              <img src="./src/assets/star1.png" className='swirls'/>
              <h3 className='Section-Headers'>Contact</h3>
              <img src="./src/assets/star1.png" className='swirls'/>
            </div>
            <div className="contact-items">
                <p>I am currently available for work. Feel free to reach out to me for any inquiries!</p>
                <div className="contact-icons">
                    <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer" >
                      <img src="../src/assets/LinkedIN_black.png" alt="LinkedIN icon" className='Social-Icons'/>
                    </a>
                    <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer" >
                      <img src="../src/assets/Github_black.png" alt="Github icon"className='Social-Icons'/>
                    </a>
                    <a href='https://www.instagram.com/bridger.brown/' target="_blank" rel="noopener noreferrer" > 
                      <img src="../src/assets/Instagram_black.png" alt="Instagram icon"className='Social-Icons'/>
                    </a>
                    <button onClick={copyContact} id="copy-button">Copy Email</button>
                </div>
            </div>
        </div>
    )
}

export default Contact