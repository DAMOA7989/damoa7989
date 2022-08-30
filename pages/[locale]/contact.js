import React from "react";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Contact = () => {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989 Contact</title>
            </Head>
            contact
        </AppLayout>
    );
};

export default Contact;