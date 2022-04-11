import React from "react";
import styles from "./CardToday.module.scss";
import { CardToDoItem } from "../CardToday/CardToDoItem";

export const CardToday = () => {
  const cards = [
    {
      id: 1,
      title: "Lorem ipsum dolore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.",
    },
    { id: 2, title: "Lorem ipsum dolore", desc: "" },
    {
      id: 3,
      title: "Lorem ipsum dolore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tellus nulla sed vitae nisl. Vulputate orci commodo feugiat egestas malesuada vel sed scelerisque.",
    },
    { id: 4, title: "Lorem ipsum dolore", desc: "" },
  ];

  const items = cards.map(i => 
    <CardToDoItem title={i.title} desc={i.desc} />
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.font}>My today todo</h2>
      <ul className={styles.styleUl}>
        {items}
      </ul>
      <button className={styles.button}>SET ALL COMPLETE</button>
    </div>
  );
};
