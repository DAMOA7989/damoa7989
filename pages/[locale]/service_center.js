import React from "react";
import styles from "styles/pages/service_center.module.scss";
import AppLayout from "components/layout/app-layout";
import Head from "next/head";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const ServiceCenter = () => {
    const { t } = useTranslation();

    return (
        <AppLayout title={t("tab.service_center")}>
            <Head>
                <title>DAMOA7989: Service center</title>
            </Head>
            <div className={styles.container}>service center</div>
        </AppLayout>
    );
};

export default ServiceCenter;
