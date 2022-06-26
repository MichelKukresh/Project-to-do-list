import React from "react";
import styles from "./CardToday.module.scss";
import { CardToDoItem } from "../CardToday/CardToDoItem";

export const CardToday = ({ cards, deleteItem, handleClickGetTomorrow }) => {
  const items = cards.map((i) => (
    <CardToDoItem
      id={i.id}
      title={i.title}
      desc={i.body}
      deleteItem={deleteItem}
      handleClickGetTomorrow={handleClickGetTomorrow}
    />
  ));

 

  

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.font}>My today todo</h2>
      <ul className={styles.styleUl}>
        {cards.length !== 0 ? (
          items
        ) : (
          <li className={`${styles.style} ${styles.task}`}>
            <h3 className={styles.title}>Список пуст</h3>
          </li>
        )}
      </ul>
      <button className={styles.button}>SET ALL COMPLETE</button>
    </div>
  );
};
