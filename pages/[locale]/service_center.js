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
    const [_items, _setItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [activeItemIdx, setActiveItemIdx] = React.useState(-1);

    React.useEffect(() => {
        _setItems([
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 1`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 2`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 3`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 4`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 5`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 6`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
            {
                question: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.? 7`,
                answer: `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim
            lorem hac a ultricies. Id ornare
            turpis vulputate enim sed magna sit.
            A id cursus dolor urna. Aliquam diam
            integer vitae eget.`,
            },
        ]);
    }, []);

    React.useEffect(() => {
        let curItems = _items;

        const convertedSearch = (search || "")
            .toLowerCase()
            .trim()
            .replaceAll(" ", "");
        curItems = (curItems || []).filter((item) => {
            const question = item.question;
            const convertedQuestion = (question || "")
                .toLowerCase()
                .trim()
                .replaceAll(" ", "");

            if (convertedQuestion.includes(convertedSearch)) return true;
            return false;
        });

        setItems(curItems);
    }, [_items, search]);

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
                        {items.map((item, idx) => (
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
                                        <span>{item.question}</span>
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
                                            {item.answer}
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
