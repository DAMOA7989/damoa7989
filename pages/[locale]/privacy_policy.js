import React from "react";
import styles from "styles/pages/privacy_policy.module.scss";
import AppLayout from "components/layout/app-layout";
import Head from "next/head";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const PrivacyPolicy = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989: Privacy policy</title>
            </Head>
            <div className={styles.container}>privacy policy</div>
        </AppLayout>
    );
};

export default PrivacyPolicy;
