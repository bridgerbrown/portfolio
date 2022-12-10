import React from "react";
import Image from "next/image";

function Contact() {
    function copyContact(){
        let email = 'bridgerbrowndev@gmail.com'
        navigator.clipboard.writeText(email);
        let button = document.getElementById("copy-button")
        button.innerText = "Copied! ✔"
    }

    return (
        <div className={`${styles["contact-container"]} ${styles["Section-container"]}`} id="contact">
            <div className='section-line'>
              <Image src="../public/star1.png" className={styles["swirls"]}/>
              <h3 className='Section-Headers'>Contact</h3>
              <Image src="../public/star1.png" className={styles["swirls"]}/>
            </div>
            <div className={styles["contact-items"]}>
                <p>I am currently available for work. Feel free to reach out to me for any inquiries!</p>
                <div className={styles["contact-icons"]}>
                    <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer" >
                      <Image src="../public/LinkedIN_black.png" alt="LinkedIN icon" className={styles["Social-Icons"]}/>
                    </a>
                    <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer" >
                      <Image src="../public/Github_black.png" alt="Github icon"className={styles["Social-Icons"]}/>
                    </a>
                    <a href='https://www.instagram.com/bridger.brown/' target="_blank" rel="noopener noreferrer" > 
                      <Image src="../public/Instagram_black.png" alt="Instagram icon"className={styles["Social-Icons"]}/>
                    </a>
                    <button onClick={copyContact} id="copy-button">Copy Email</button>
                </div>
            </div>
        </div>
    )
}

export default Contact