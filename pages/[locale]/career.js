import React from "react";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Career = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989 Career</title>
            </Head>
            career
        </AppLayout>
    );
};

export default Career;
