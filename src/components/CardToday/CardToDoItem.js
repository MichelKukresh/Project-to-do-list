import React from "react";
import styles from "./CardToday.module.scss";

export const CardToDoItem = ({ title, desc, deleteItem, id }) => {
  return (
    <li className={`${styles.style} ${styles.task}`}>
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.doneGrey} />
      <button className={styles.del} onClick={() => deleteItem(id)}/>
      {desc && <p className={styles.subtitle}>{desc}</p>}
    </li>
  );
};
