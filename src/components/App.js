import React from "react";
import { Content } from "./Content/Content";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <Content/>
        </div>
    )
}
