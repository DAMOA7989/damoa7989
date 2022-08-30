import React from "react";
import styles from "styles/pages/service_and_portfolio.module.scss";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const ServiceAndPortfolio = () => {
    const { t } = useTranslation();

    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989 Service and Portfolio</title>
            </Head>
            <div
                id="service"
                className={styles.area}
                style={{ height: "1000px" }}
            >
                <h5 className={styles.area_title}>
                    {t("title.index.service")}
                </h5>
            </div>
            <div
                id="portfolio"
                className={styles.area}
                style={{ height: "1000px" }}
            >
                <h5 className={styles.area_title}>
                    {t("title.index.portfolio")}
                </h5>
            </div>
        </AppLayout>
    );
};

export default ServiceAndPortfolio;
