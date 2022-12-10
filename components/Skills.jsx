import React from "react";
import Image from "next/image";

function Skills() {
    return(
        <div className={`${styles["skills-container"]} ${styles["Section-container"]}`}>
            <div>
                <div className={styles["section-line"]}>
                    <Image src="../public/star1.png" className={styles["swirls"]}/>
                    <h3 className={styles["Section-Headers"]} id="skills-header">Skills</h3>
                <Image src="../public/star1.png" className={styles["swirls"]}/>
                </div>
                <p className={styles["currently-learning"]}>I am currently learning...
                    <span>
                        <i class="devicon-python-plain" id="currently-icon"></i>
                        Python
                    </span>
                    .
                </p>
            </div>
            <div className={styles["skill-icons"]}>
                <div className={styles["skill"]}>          
                    <i class="devicon-javascript-plain"></i>
                    <p>JAVASCRIPT</p>
                </div>
                <div className={styles["skill"]}>     
                    <i class="devicon-react-original"></i>
                    <p>REACT</p>
                </div>
                <div className={styles["skill"]}>
                    <i class="devicon-html5-plain"></i>
                    <p>HTML</p>
                </div>
                <div className={styles["skill"]}>  
                    <i class="devicon-css3-plain"></i>
                    <p>CSS</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-vim-plain"></i>
                    <p>VIM</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-jquery-plain"></i>
                    <p>JQUERY</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-git-plain"></i>
                    <p>GIT</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-wordpress-plain"></i>
                    <p>WORDPRESS</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-photoshop-plain"></i>
                    <p>PHOTOSHOP</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-illustrator-plain"></i>
                    <p>ILLUSTRATOR</p>
                </div>
                <div className={`${styles["skill"]} ${styles["after-effects"]}`}>       
                    <i class="devicon-aftereffects-plain"></i>
                    <p>AFTER EFFECTS</p>
                </div>
                <div className={styles["skill"]}>       
                    <i class="devicon-figma-plain"></i>
                    <p>FIGMA</p>
                </div>
            </div>
        </div>
    )
}

export default Skills