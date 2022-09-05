import React from "react";
import styles from "styles/pages/service_center.module.scss";
import AppLayout from "components/layout/app-layout";
import Head from "next/head";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation, Trans } from "next-i18next";
import CommonInput from "components/input/CommonInput";
import CommonSelect from "components/input/CommonSelect";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const ServiceCenter = () => {
    const { t } = useTranslation();
    const [search, setSearch] = React.useState("");
    const [_items, _setItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [activeItemIdx, setActiveItemIdx] = React.useState(-1);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [region, setRegion] = React.useState(null);
    const [about, setAbout] = React.useState(null);
    const [message, setMessage] = React.useState("");
    const [canSubmit, setCanSubmit] = React.useState(false);

    React.useEffect(() => {
        _setItems([
            {
                question: "text.service_center.faq.00.question",
                answer: "text.service_center.faq.00.answer",
            },
            {
                question: "text.service_center.faq.01.question",
                answer: "text.service_center.faq.01.answer",
            },
            {
                question: "text.service_center.faq.02.question",
                answer: "text.service_center.faq.02.answer",
            },
            {
                question: "text.service_center.faq.03.question",
                answer: "text.service_center.faq.03.answer",
            },
            {
                question: "text.service_center.faq.04.question",
                answer: "text.service_center.faq.04.answer",
            },
            {
                question: "text.service_center.faq.05.question",
                answer: "text.service_center.faq.05.answer",
            },
            {
                question: "text.service_center.faq.06.question",
                answer: "text.service_center.faq.06.answer",
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
            const question = t(item.question);
            const convertedQuestion = (question || "")
                .toLowerCase()
                .trim()
                .replaceAll(" ", "");

            if (convertedQuestion.includes(convertedSearch)) return true;
            return false;
        });

        setItems(curItems);
    }, [_items, search]);

    React.useEffect(() => {
        if (!Boolean(firstName)) return setCanSubmit(false);
        if (!Boolean(lastName)) return setCanSubmit(false);
        if (!Boolean(email)) return setCanSubmit(false);
        if (!Boolean(company)) return setCanSubmit(false);
        if (!region) return setCanSubmit(false);
        if (!about) return setCanSubmit(false);
        setCanSubmit(true);
    }, [firstName, lastName, email, company, region, about]);

    const onSubmitHandler = () => {};

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
                                        <Trans
                                            parent="span"
                                            i18nKey={item.question}
                                        />
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
                                            <Trans
                                                i18nKey={item.answer}
                                                components={{
                                                    email: (
                                                        <a href="mailto:recruit@damoa7989.xyz" />
                                                    ),
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.contact_us}>
                    <h3 className={styles.title}>
                        {t("title.service_center.contact_us")}
                    </h3>
                    <div className={styles.form}>
                        <div className={styles.fields}>
                            <div className={styles.input_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_first_name")}
                                </h5>
                                <CommonInput
                                    placeholder={t(
                                        "title.service_center.field_first_name"
                                    )}
                                    value={firstName}
                                    onChange={(event) =>
                                        setFirstName(event.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.input_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_last_name")}
                                </h5>
                                <CommonInput
                                    placeholder={t(
                                        "title.service_center.field_last_name"
                                    )}
                                    value={lastName}
                                    onChange={(event) =>
                                        setLastName(event.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.input_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_email")}
                                </h5>
                                <CommonInput
                                    placeholder={t(
                                        "title.service_center.field_email"
                                    )}
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.input_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_company")}
                                </h5>
                                <CommonInput
                                    placeholder={t(
                                        "title.service_center.field_company"
                                    )}
                                    value={company}
                                    onChange={(event) =>
                                        setCompany(event.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.select_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_region")}
                                </h5>
                                <CommonSelect
                                    placeholder={t(
                                        "title.service_center.field_region"
                                    )}
                                    value={region}
                                    onChange={(item) => setRegion(item)}
                                    datas={[
                                        {
                                            key: "republic_of_korea",
                                            i18nKey:
                                                "title.nation.republic_of_korea",
                                        },
                                        {
                                            key: "usa",
                                            i18nKey: "title.nation.usa",
                                        },
                                    ]}
                                />
                            </div>
                            <div className={styles.select_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_about")}
                                </h5>
                                <CommonSelect
                                    placeholder={t(
                                        "title.service_center.field_about"
                                    )}
                                    value={about}
                                    onChange={(item) => setAbout(item)}
                                    datas={[
                                        {
                                            key: "sarammoa",
                                            i18nKey:
                                                "title.corporation.sarammoa",
                                        },
                                    ]}
                                />
                            </div>
                            <div className={styles.input_multiline_field}>
                                <h5 className={styles.field_title}>
                                    {t("title.service_center.field_message")}
                                </h5>
                                <CommonInput
                                    placeholder={t(
                                        "title.service_center.field_message"
                                    )}
                                    value={message}
                                    onChange={(event) =>
                                        setMessage(event.target.value)
                                    }
                                    multiline
                                />
                            </div>
                        </div>
                        <button
                            className={`common-button primary ${
                                canSubmit && "active"
                            }`}
                            onClick={canSubmit ? onSubmitHandler : null}
                        >
                            {t("btn.submit")}
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ServiceCenter;
