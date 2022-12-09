import React from 'react'
import styles from '../styles/app.module.css'

function MartiniShotWebsite() {
return(
    <>
        <div className={styles["project-single-container"]}>
            <div className={styles["project-img"]}>
                <a href='www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                    <img src='./src/assets/martini-shot-preview.jpg' alt="martini shot project preview" className={`${styles["Work-Preview"]} ${styles["reveal-left"]}`}/>
                </a>
            </div>
            <div className={`${styles["Work-Details"]} ${styles["reveal-right"]}`}>
                <div className={styles["project-text"]}>
                    <a href='www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                        <h4>Martini Shot Podcast Website</h4>
                    </a>
                    <p>A website for the podcast Martini Shot with writer and TV producer Rob Long (Cheers, Sullivan & Son).
                        This was one of my first website projects and was built using Wordpress, HTML, and CSS.
                        <br></br>
                        <br></br>
                        In addition to managing the website, I am also the audio producer/editor and designed the Martini Shot logo.</p>
                </div>
                <div className={styles["project-buttons"]}>
                <a href='www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                    <button className={`${styles["ReadMore"]}`}>Preview</button>
                </a>
            </div>    
            </div>
        </div>
    </>
)
}

export default MartiniShotWebsite