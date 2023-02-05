import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

export default () => {
    return <div className={styles.root}>
        <Outlet />
    </div>
}