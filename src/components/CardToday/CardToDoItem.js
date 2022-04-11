import React from "react";
import styles from "./CardToday.module.scss";

export const CardToDoItem = ({ title, desc }) => {
  return (
    <li className={`${styles.style} ${styles.task}`}>
      <h3 className={styles.title}>Lorem ipsum dolore{title}</h3>
      <button className={styles.doneGrey} />
      <button className={styles.del} />
      {desc && <p className={styles.subtitle}>{desc}</p>}
    </li>
  );
};
