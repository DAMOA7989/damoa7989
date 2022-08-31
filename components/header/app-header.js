import React from "react";
import Link from "../Link";
import styles from "../../styles/components/app-header.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const __TABS__ = [
    // {
    //     key: "about_us",
    //     i18nKey: "tab.about_us",
    //     path: "/",
    //     onClick: () => {},
    // },
    {
        key: "team_culture",
        i18nKey: "tab.team_culture",
        path: "/team_culture",
        onClick: () => {},
    },
    {
        key: "service_and_portfolio",
        i18nKey: "tab.service_and_portfolio",
        path: "/service_and_portfolio",
        onClick: () => {},
    },
    {
        key: "career",
        i18nKey: "tab.career",
        path: "/career",
        onClick: () => {},
    },
    {
        key: "contact",
        i18nKey: "tab.contact",
        path: "/contact",
        onClick: () => {},
    },
];

const AppHeader = ({ title }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const containerRef = React.useRef(null);
    const [menuVisibility, setMenuVisibility] = React.useState(false);

    React.useEffect(() => {
        if (!containerRef.current) return;
        if (!Boolean(title)) {
            containerRef.current.style.top = "0px";
        }
    }, [title, containerRef.current]);

    return (
        <header ref={containerRef} className={styles.container}>
            <div className={styles.bar}>
                <div className={styles.logo} onClick={() => router.push("/")} />
                <div className="menu">
                    <div
                        className={`${
                            menuVisibility ? styles.hidden : styles.show
                        } ${styles.menu_button}`}
                        onClick={() => setMenuVisibility(!menuVisibility)}
                    >
                        <div />
                        <div />
                    </div>
                    {menuVisibility && (
                        <nav className={`${styles.menu_nav}`}>
                            <ul className={styles.menu_nav_list}>
                                {__TABS__.map((tab, idx) => (
                                    <li
                                        key={tab.key}
                                        className={`${
                                            styles.menu_nav_list_item
                                        } ${
                                            router.pathname ===
                                            "/[locale]" + tab.path
                                                ? styles.active
                                                : null
                                        }`}
                                    >
                                        <Link href={tab.path}>
                                            <span>{t(tab.i18nKey)}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
            {title && <div className={styles.title_bar}>{title}</div>}
        </header>
    );
};

export default AppHeader;
