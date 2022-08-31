import React from "react";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const TeamCulture = () => {
    const { t } = useTranslation();

    return (
        <AppLayout title={t("tab.team_culture")}>
            <Head>
                <title>DAMOA7989: Team culture</title>
            </Head>
            Team culture
        </AppLayout>
    );
};

export default TeamCulture;
