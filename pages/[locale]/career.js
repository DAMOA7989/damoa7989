import React from "react";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Career = () => {
    const { t } = useTranslation();

    return (
        <AppLayout title={t("tab.career")}>
            <Head>
                <title>DAMOA7989: Career</title>
            </Head>
            career
        </AppLayout>
    );
};

export default Career;
