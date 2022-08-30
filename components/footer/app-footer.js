import React from "react";
import styles from "../../styles/components/app-footer.module.scss";
import { useTranslation } from "next-i18next";
import Link from "components/Link";

const __TABS__ = [
    {
        key: "about_us",
        i18nKey: "tab.about_us",
        path: "/",
        onClick: () => {},
    },
    {
        key: "terms_of_service",
        i18nKey: "tab.terms_of_service",
        path: "/terms_of_service",
        onClick: () => {},
    },
    {
        key: "privacy_policy",
        i18nKey: "tab.privacy_policy",
        path: "/privacy_policy",
        onClick: () => {},
    },
    {
        key: "service_center",
        i18nKey: "tab.service_center",
        path: "/service_center",
        onClick: () => {},
    },
];

const __SNS__ = [
    {
        key: "github",
        i18nKey: "sns.github",
        onClick: () => {
            window.open("https://github.com/DAMOA7989", "_blank");
        },
    },
    {
        key: "medium",
        i18nKey: "sns.medium",
        onClick: () => {
            window.alert("We are ready.");
        },
    },
    {
        key: "facebook",
        i18nKey: "sns.facebook",
        onClick: () => {
            window.alert("We are ready.");
        },
    },
    {
        key: "instagram",
        i18nKey: "sns.instagram",
        onClick: () => {
            window.alert("We are ready.");
        },
    },
];

const AppFooter = () => {
    const { t } = useTranslation("common");

    return (
        <footer className={styles.container}>
            <ul className={styles.tabs_list}>
                {__TABS__.map((tab, idx) => (
                    <li key={tab.key} className={styles.tabs_list_item}>
                        <Link href={tab.path}>{t(tab.i18nKey)}</Link>
                    </li>
                ))}
            </ul>
            <ul className={styles.sns_list}>
                {__SNS__.map((sns, idx) => (
                    <li key={sns.key}>
                        <div
                            className={styles[`${sns.key}_icon`]}
                            onClick={sns.onClick}
                        ></div>
                    </li>
                ))}
            </ul>
            <ul className={styles.info_list}>
                <li className={styles.info_list_item}>
                    <p>{`${t("text.address")} : ${t("text.address_value")}`}</p>
                </li>
                <li className={styles.info_list_item}>
                    <p>{t("text.company_name")}</p>
                </li>
            </ul>
        </footer>
    );
};

export default AppFooter;
