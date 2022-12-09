import React from 'react'
import styles from '../styles/app.module.css'

function EcommerceProject() {
    return(
        <>
            <div className={styles["project-single-container"]}>
                <div className={styles["project-img"]}>
                    <img src='./src/assets/ecommerce-preview.png' alt="ecommerce preview" className={`${styles["Work-Preview"]} ${styles["reveal-left"]}`}/>
                </div>
                <div className={`${styles["Work-Details"]} ${styles["reveal-right"]}`}>
                    <div className={styles["project-text"]}>
                    <h4>eCommerce app</h4>
                    <p>
                        An eCommerce website using paintings from the Art Institute of Chicago's public API as products, this project uses such technology as 
                        React Router, React Context, Firebase Database, and Firestore User Authentication.
                    </p>
                    </div>
                    <div className={styles["project-buttons"]}>
                        <a>
                            <button className={`${styles["ReadMore"]}`}>Preview</button>
                        </a>
                        <a href='https://github.com/bridgerbrown/ecommerce-basic' target="_blank" rel="noopener noreferrer">
                            <button className={`${styles["ReadMore"]}`}>Github</button>
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default EcommerceProject