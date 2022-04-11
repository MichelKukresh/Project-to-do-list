import React from "react";
import styles from "./CardNew.module.scss";

export const CardNew = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.font}>Add new one</h2>
            <input className={styles.input} placeholder={"TITLE"}/>
            <textarea className={`${styles.input} ${styles.input__long}`} placeholder={"DESCRIPTION"}/>
            <input className={styles.input} placeholder={"TODAY"}/>
            <button className={styles.button}>ADD</button>     
        </div>
    )
}