import React from "react";

function Contact() {
    function copyContact(){
        let email = 'bridgerbrowndev@gmail.com'
        navigator.clipboard.writeText(email);
        let button = document.getElementById("copy-button")
        button.innerText = "Copied! ✔"
    }

    return (
        <div className="contact-container" id="contact">
            <h3 className='Section-Headers'>Contact</h3>
            <div className="contact-items">
                <h2>Get in Touch</h2>
                <p>I am currently available for work. Feel free to reach out to me for any inquiries!</p>
                <button onClick={copyContact} id="copy-button">Copy Email</button>
            </div>
        </div>
    )
}

export default Contact