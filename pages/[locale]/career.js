import React from "react";
import styles from "styles/pages/career.module.scss";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation, Trans } from "next-i18next";
import CommonSelect from "components/input/CommonSelect";
import CommonInput from "components/input/CommonInput";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Career = () => {
    const { t } = useTranslation();
    const [jobGroup, setJobGroup] = React.useState(null);
    const [corporation, setCorporation] = React.useState(null);
    const [search, setSearch] = React.useState("");
    const [careers, setCareers] = React.useState([]);

    return (
        <AppLayout title={t("tab.career")}>
            <Head>
                <title>DAMOA7989: Career</title>
            </Head>
            <div className={styles.container}>
                <h3 className={styles.title}>
                    <Trans i18nKey={"title.career.main"} />
                </h3>
                <div className={styles.filter}>
                    <CommonSelect
                        placeholder={t(
                            "placeholder.career.entire_position_sector"
                        )}
                        value={jobGroup}
                        onChange={(item) => setJobGroup(item)}
                        datas={[
                            {
                                key: "entire",
                                i18nKey: "select.career.job_group.entire",
                            },
                        ]}
                    />
                    <CommonSelect
                        placeholder={t("placeholder.career.entire_corporation")}
                        value={corporation}
                        onChange={(item) => setCorporation(item)}
                        datas={[
                            {
                                key: "entire",
                                i18nKey: "select.career.corporation.entire",
                            },
                        ]}
                    />
                    <CommonInput
                        placeholder={t("placeholder.career.search")}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={styles.result}>
                    {careers.length <= 0 ? (
                        <div className={styles.result_empty}>
                            {t("text.career.table.empty")}
                        </div>
                    ) : (
                        <ul>
                            {careers.map((career, idx) => (
                                <li key={idx}>
                                    <div
                                        className={
                                            styles.result_ul_li_container
                                        }
                                    ></div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default Career;
