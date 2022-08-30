import React from "react";
import styles from "styles/pages/index.module.scss";
import AppLayout from "../../components/layout/app-layout";
import Head from "next/head";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import imageIntroduction00 from "public/images/common/introduction.00.png";
import imageIntroduction01 from "public/images/common/introduction.01.png";
import imagePlayStore from "public/images/common/play.store.webp";
import imageMunchSkill from "public/images/common/munchskill.svg";
import imageOrbitBridge from "public/images/common/orbitbridge.svg";
import imageSoleX from "public/images/common/sole-x.svg";
import { useRouter } from "next/router";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

export default function Home() {
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <AppLayout>
            <Head>
                <title>DAMOA7989</title>
            </Head>
            <div className={styles.container}>
                <article className={styles.introduction}>
                    <Trans
                        t={t}
                        parent={"p"}
                        i18nKey={"text.index.introduction.00"}
                    />
                    <Image
                        className={styles.image}
                        src={imageIntroduction00}
                        alter="Picture of introduction"
                        layout="responsive"
                        placeholder="blur"
                        priority
                    />
                    <Trans
                        t={t}
                        parent={"p"}
                        i18nKey={"text.index.introduction.01"}
                    />
                    <Image
                        className={styles.image}
                        src={imageIntroduction01}
                        alter="Picture of introduction"
                        layout="responsive"
                        placeholder="blur"
                        priority
                    />
                    <Trans
                        t={t}
                        parent={"p"}
                        i18nKey={"text.index.introduction.02"}
                        components={{
                            bold: <span style={{ fontWeight: "bold" }} />,
                        }}
                    />
                </article>
                <article className={styles.service}>
                    <h3 className={styles.title}>{t("title.index.service")}</h3>
                    <div className="slider">
                        <div className="slides">
                            <div className="slide" onClick={() => {}}>
                                <div
                                    className={`${styles.slide_image} slide_image`}
                                >
                                    <Image
                                        src={imagePlayStore}
                                        layout="responsive"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className="description">
                                    {t("text.service.00")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className={styles.detail_btn}
                        onClick={() => {
                            router.push("/service_and_portfolio/#service");
                        }}
                    >
                        {t("btn.detail")}
                    </button>
                </article>
                <article className={styles.portfolio}>
                    <h3 className={styles.title}>
                        {t("title.index.portfolio")}
                    </h3>
                    <div className="slider">
                        <div className="slides">
                            <div className="slide" onClick={() => {}}>
                                <div
                                    className={`${styles.slide_image} slide_image`}
                                >
                                    <Image
                                        src={imageMunchSkill}
                                        layout="responsive"
                                        // placeholder="blur"
                                    />
                                </div>
                                <div className="description">
                                    {t("text.portfolio.00")}
                                </div>
                            </div>
                            <div className="slide" onClick={() => {}}>
                                <div
                                    className={`${styles.slide_image} slide_image`}
                                >
                                    <Image
                                        src={imageOrbitBridge}
                                        layout="responsive"
                                        // placeholder="blur"
                                    />
                                </div>
                                <div className="description">
                                    {t("text.portfolio.01")}
                                </div>
                            </div>
                            <div className="slide" onClick={() => {}}>
                                <div
                                    className={`${styles.slide_image} slide_image`}
                                >
                                    <Image
                                        src={imageSoleX}
                                        layout="responsive"
                                        // placeholder="blur"
                                    />
                                </div>
                                <div className="description">
                                    {t("text.portfolio.02")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className={styles.detail_btn}
                        onClick={() => {
                            router.push("/service_and_portfolio/#portfolio");
                        }}
                    >
                        {t("btn.detail")}
                    </button>
                </article>
            </div>
        </AppLayout>
    );
}
