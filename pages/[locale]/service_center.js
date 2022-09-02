import React from "react";
import styles from "styles/pages/service_center.module.scss";
import AppLayout from "components/layout/app-layout";
import Head from "next/head";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import CommonInput from "components/input/CommonInput";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const ServiceCenter = () => {
    const { t } = useTranslation();
    const [search, setSearch] = React.useState("");
    const [items, setItems] = React.useState([]);
    const [activeItemIdx, setActiveItemIdx] = React.useState(-1);

    return (
        <AppLayout title={t("tab.service_center")}>
            <Head>
                <title>DAMOA7989: Service center</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.faq}>
                    <h3 className={styles.title}>
                        {t("title.service_center.faq")}
                    </h3>
                    <CommonInput
                        className={styles.search}
                        placeholder={t("placeholder.search")}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <ul className={styles.items}>
                        {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
                            <li key={idx} className={styles.items_item}>
                                <div className={styles.items_item_container}>
                                    <div
                                        className={
                                            styles.items_item_container_question
                                        }
                                        onClick={() => {
                                            if (activeItemIdx === idx) {
                                                setActiveItemIdx(-1);
                                            } else {
                                                setActiveItemIdx(idx);
                                            }
                                        }}
                                    >
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.?
                                        </span>
                                        <div
                                            className={`${styles.arrow} ${
                                                activeItemIdx === idx &&
                                                styles.arrow_active
                                            }`}
                                        />
                                    </div>
                                    {activeItemIdx === idx && (
                                        <div
                                            className={
                                                styles.items_item_container_answer
                                            }
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Enim
                                            lorem hac a ultricies. Id ornare
                                            turpis vulputate enim sed magna sit.
                                            A id cursus dolor urna. Aliquam diam
                                            integer vitae eget.
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AppLayout>
    );
};

export default ServiceCenter;
