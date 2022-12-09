import React from 'react'
import EcommerceProject from './Project-Previews/EcommerceProject'
import MartiniShotWebsite from './Project-Previews/MartiniShotWebsite'
import QuizProject from './Project-Previews/QuizProject'
import styles from '../styles/app.module.css'

function Projects() {
    return(
        <div className={styles["Section-Container"]} id="projects">
            <div className={styles["section-line"]}>
              <img src="./src/assets/star1.png" className={styles["swirls"]}/>
              <h3 className={styles["Section-Headers"]}>Projects</h3>
              <img src="./src/assets/star1.png" className={styles["swirls"]}/>
            </div>
            <div className={styles["Work-Container"]}>
                <EcommerceProject />
                <QuizProject />
                <MartiniShotWebsite />
            </div>
            <div className={styles["coming-soon"]}>
                <h3>More coming soon...</h3>
            </div>
        </div>
    )
}

export default Projects