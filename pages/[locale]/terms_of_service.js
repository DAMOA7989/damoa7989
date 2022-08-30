import React from "react";
import styles from "styles/pages/terms_of_service.module.scss";
import AppLayout from "components/layout/app-layout";
import Head from "next/head";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const TermsOfService = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989: Terms of service</title>
            </Head>
            <div className={styles.container}>terms of service</div>
        </AppLayout>
    );
};

export default TermsOfService;
