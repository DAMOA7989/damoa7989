import React from "react";
import styles from "styles/pages/contact.module.scss";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation, Trans } from "next-i18next";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Contact = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        const map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(37.5075512, 127.060561),
            zoom: 17,
        });
    }, []);

    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989: Contact</title>
            </Head>
            <div className={styles.container}>
                <article className={styles.head_quarter}>
                    <h5 className={styles.title}>
                        {t("title.contact.head_quarter")}
                    </h5>
                    <div className={styles.map_container}>
                        <div
                            id="map"
                            className={styles.map}
                            style={{ width: "100%", height: "100%" }}
                        ></div>
                    </div>
                    <div className={styles.address}>
                        <span>{t("title.contact.address")}</span>
                        <Trans parent="span" i18nKey={"text.contact.address"} />
                    </div>
                    <div className={styles.phone_number}>
                        <span>{t("title.contact.phone_number")}</span>
                        <Trans
                            parent="span"
                            i18nKey={"text.contact.phone_number"}
                        />
                    </div>
                </article>
            </div>
        </AppLayout>
    );
};

export default Contact;
