import React from "react";
import styles from "./CardToday.module.scss";

export const CardToday = () => {
    return (
        <div className={styles.wrapper}>
  <h2 className={styles.font}>My today todo</h2>
  <ul className={styles.styleUl}>
    <li className={`${styles.style} ${styles.task}` }>
      <h3 className={styles.title}> Lorem ipsum dolore</h3>
      <button className={styles.done}></button>
      <button className={styles.del}></button>      
    </li>
    <li className={`${styles.style} ${styles.task}` }>
      <h3 className={styles.title}>Lorem ipsum dolore</h3>
      <button className={styles.done}></button>
      <button className={styles.del}></button>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.</p>
    </li>
    <li className={`${styles.style} ${styles.task}` }>
      <h3 className={styles.title}>Lorem ipsum dolore</h3>
      <button className={styles.doneGrey}></button>
      <button className={styles.del}></button>      
    </li>
    <li className={`${styles.style} ${styles.task}` }>
      <h3 className={styles.title}>Lorem ipsum dolore</h3>
      <button className={styles.doneGrey}></button>
      <button className={styles.del}></button>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.</p>
    </li>
  </ul>
  <button className={styles.button}>SET ALL COMPLETE</button>
</div>
    )
}