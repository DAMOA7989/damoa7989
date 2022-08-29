import React from "react";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const ServiceAndPortfolio = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989 Service and Portfolio</title>
            </Head>
            Service and Portfolio
        </AppLayout>
    );
};

export default ServiceAndPortfolio;
