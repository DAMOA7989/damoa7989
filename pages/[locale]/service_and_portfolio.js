import React from "react";
import styles from "styles/pages/service_and_portfolio.module.scss";
import Head from "next/head";
import AppLayout from "../../components/layout/app-layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import Image from "next/future/image";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const portfolioItems = [
    {
        key: "munchskill",
        imgPath: "/images/common/munchskill.svg",
        imgWidth: 350,
        imgHeight: 230,
        label: "(Participation) Frontend",
        onClick: () => {
            window.open("https://test.munchskill.com/", "_blank");
        },
    },
    {
        key: "orbitbridge",
        imgPath: "/images/common/orbitbridge.svg",
        imgWidth: 350,
        imgHeight: 230,
        label: "(Participation) Frontend",
        onClick: () => {
            window.open("https://bridge.orbitchain.io/", "_blank");
        },
    },
    {
        key: "sole-x",
        imgPath: "/images/common/sole-x.svg",
        imgWidth: 350,
        imgHeight: 230,
        label: "(Participation) Frontend",
        onClick: () => {
            window.open("https://www.sole-x.io/", "_blank");
        },
    },
];

const ServiceAndPortfolio = () => {
    const { t } = useTranslation();

    return (
        <AppLayout title={t("tab.service_and_portfolio")}>
            <Head>
                <title>DAMOA7989: Service and Portfolio</title>
            </Head>
            <div id="service" className={styles.area}>
                <h5 className={styles.area_title}>
                    {t("title.index.service")}
                </h5>
                <div className={styles.mockup}>
                    <div className={styles.mockup_image_container}>
                        <Image
                            src="/images/common/play.store.webp"
                            width={350}
                            height={230}
                        />
                    </div>
                    <h5 className={styles.mockup_title}>
                        {t("title.service_and_portfolio.mockup.title")}
                    </h5>
                    <p className={styles.mockup_desc}>
                        {t("title.service_and_portfolio.mockup.desc")}
                    </p>
                </div>
                <div className={styles.info}>
                    {[1, 2, 3, 4].map((x, idx) => (
                        <div key={idx} className={styles.info_image_container}>
                            <Image
                                src="/images/common/empty_img.svg"
                                width={350}
                                height={230}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div id="portfolio" className={styles.area}>
                <h5 className={styles.area_title}>
                    {t("title.index.portfolio")}
                </h5>
                <div className={styles.portfolio_items}>
                    {portfolioItems.map((item) => (
                        <div>
                            <div
                                key={item.key}
                                className={styles.img_container}
                                title="(Participation) Frontend"
                                onClick={item.onClick}
                            >
                                <Image
                                    src={item.imgPath}
                                    width={item.imgWidth}
                                    height={item.imgHeight}
                                />
                            </div>
                            <div className={styles.img_label}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default ServiceAndPortfolio;
