import React from "react";
import Head from "next/head";
import AppLayout from "../components/layout/app-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

const TeamCulture = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989 Team culture</title>
            </Head>
            Team culture
        </AppLayout>
    );
};

export default TeamCulture;
