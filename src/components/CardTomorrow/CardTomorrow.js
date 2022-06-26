import React from "react";
import { CardToDoItem } from "../CardToday/CardToDoItem";
import styles from "./CardTomorrow.module.scss";

export const CardTomorrow = (props) => {
  const items = props.cardsTomorrow.map((i) => (
    <CardToDoItem
      id={i.id}
      title={i.title}
      desc={i.body}
      //deleteItem={deleteItem}
    />
  ));

  //&lt; <

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.font}>My tomorrow todo</h2>
      <ul className={styles.styleUl}>
       {items}
      </ul>
    </div>
  );
};
