import React from "react";
import styles from "./Content.module.scss";
import { CardNew } from "../CardNew/CardNew";
import { CardToday } from "../CardToday/CardToday";
import { CardTomorrow } from "../CardTomorrow/CardTomorrow";

export const Content = () => {
  return (
    <div className={styles.wrapper}>
      <CardNew />
      <CardToday />
      <CardTomorrow />
    </div>
  );
};
