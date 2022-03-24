import React from "react";
import styles from "./CardNew.module.scss";

export const CardNew = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.font}>Add new one</h2>
            <input className={styles.input}></input>
            <input className={`${styles.input} ${styles.input__long}`}></input>
            <input className={styles.input}></input>
            <button className={styles.button}>ADD</button>     
        </div>
    )
}