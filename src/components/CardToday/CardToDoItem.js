import React from "react";
import styles from "./CardToday.module.scss";



export const CardToDoItem = ({ title, desc, deleteItem, id, handleClickGetTomorrow }) => {



  return (
    <li className={`${styles.style} ${styles.task}`}>
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.doneGrey} />
      <button className={styles.tomorrow} onClick={()=>handleClickGetTomorrow(id, desc, title)}>&gt;</button>
      <button className={styles.del} onClick={() => deleteItem(id)}/>      
      {desc && <p className={styles.subtitle}>{desc}</p>}
    </li>
  );
};
