import Head from "next/head";
import Image from "next/image";
import AppLayout from "../components/layout/app-layout";
import AppHeader from "../components/header/app-header";
import AppFooter from "../components/footer/app-footer";

export default function Home() {
    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989</title>
                <meta name="description" content="We connect all actions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader />
            <main>home</main>
            <AppFooter />
        </AppLayout>
    );
}
