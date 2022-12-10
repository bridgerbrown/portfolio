import React from 'react'
import Image from 'next/image'

function Landing() {
    return(
        <div className={styles["Landing-Page"]}>
            <div className={styles["Landing-box"]}>
                <div className={styles["Landing-Text"]}>
                    <h1>Bridger Brown</h1>
                    <h2>Front-End Web Developer + Designer</h2>
                </div>
                <div className={styles["landpages"]}>
                    <Image src='../public/wave-dark.jpg' className={styles["fade"]} id='land-bg'/>
                </div>
            </div>
        </div>
    )
}

export default Landing