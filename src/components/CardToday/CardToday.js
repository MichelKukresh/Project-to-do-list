import React from "react";
import styles from "./CardToday.module.scss";
import { CardToDoItem } from "../CardToday/CardToDoItem";

export const CardToday = ({cards, deleteItem}) => {


  const items = cards.map(i => 
    <CardToDoItem id={i.id}  title={i.title} desc={i.desc} deleteItem={deleteItem}/>
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.font}>My today todo</h2>
      <ul className={styles.styleUl}>
        {cards.length !== 0 ? items : "Список пуст"}
      </ul>
      <button className={styles.button}>SET ALL COMPLETE</button>
    </div>
  );
};
