import React from 'react'
import styles from '../styles/app.module.css'

function QuizProject() {
    return(
        <>
            <div className={styles["project-single-container"]}>
                <div className={styles["project-img"]}>
                    <img src='./src/assets/quizzical-preview.png' alt="quiz project preview" className={`${styles["Work-Preview"]} ${styles["reveal-left"]}`}/>
                </div>
                <div className={`${styles["Work-Details"]} ${styles["reveal-right"]}`}>
                    <div className={styles["project-text"]}>
                    <h4>Quiz App</h4>
                    <p>
                        A trivia question game with multiple categories and difficulties that uses the data of Open Trivia Database API,
                        this project started out as a part of the Scrimba Front-End Developer Career Path but was fleshed out more on its own. 
                    </p>
                    </div>
                    <div className={styles["project-buttons"]}>
                        <button className={`${styles["ReadMore"]}`}>Preview</button>
                        <a href='https://github.com/bridgerbrown/quiz-app-project' target="_blank" rel="noopener noreferrer">
                            <button className={`${styles["ReadMore"]}`}>Github</button>
                        </a>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default QuizProject