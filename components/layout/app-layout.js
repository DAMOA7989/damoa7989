import React from "react";
import styles from "../../styles/components/app-layout.module.scss";
import Head from "next/head";
import AppHeader from "../../components/header/app-header";
import AppFooter from "../../components/footer/app-footer";

const AppLayout = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>DAMOA7989</title>
                <meta name="description" content="We connect all actions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader title={title} />
            <main>{children}</main>
            <AppFooter />
        </div>
    );
};

export default AppLayout;
