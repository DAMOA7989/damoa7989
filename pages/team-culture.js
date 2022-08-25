import React from "react";
import Head from "next/head";
import AppLayout from "../components/layout/app-layout";
import AppHeader from "../components/header/app-header";
import AppFooter from "../components/footer/app-footer";

const TeamCulture = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989</title>
                <meta name="description" content="We connect all actions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader />
            <main>team culture</main>
            <AppFooter />
        </AppLayout>
    );
};

export default TeamCulture;
