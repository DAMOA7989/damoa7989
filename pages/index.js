import React from "react";
import AppLayout from "../components/layout/app-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default function Home() {
    const { t } = useTranslation("common");
    return (
        <AppLayout>
            home
            {t("tab.about_us")}
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
        </AppLayout>
    );
}
