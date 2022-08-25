import React from "react";
import styles from "../../styles/components/app-layout.module.scss";

const AppLayout = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default AppLayout;
