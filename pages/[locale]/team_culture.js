import React from "react";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

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
