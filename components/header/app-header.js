import React from "react";
import Link from "next/link";

const __TABS__ = [
    {
        key: "about_us",
        i18nKey: "tab.about_us",
        path: "/",
        onClick: () => {},
    },
    {
        key: "team_culture",
        i18nKey: "tab.team_culture",
        path: "/team-culture",
        onClick: () => {},
    },
    {
        key: "career",
        i18nKey: "tab.career",
        path: "/career",
        onClick: () => {},
    },
    {
        key: "faq",
        i18nKey: "tab.faq",
        path: "/faq",
        onClick: () => {},
    },
];

const AppHeader = () => {
    return (
        <header>
            <h1>DAMOA7989</h1>
            <nav>
                <ul>
                    {__TABS__.map((tab, idx) => (
                        <li key={tab.key}>
                            <Link href={tab.path}>{tab.i18nKey}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;
