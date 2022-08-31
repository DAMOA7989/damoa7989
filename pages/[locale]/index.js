import React from "react";
import styles from "styles/pages/index.module.scss";
import AppLayout from "../../components/layout/app-layout";
import Head from "next/head";
import ImageNative from "next/future/image";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
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
    const serviceRef = React.useRef(null);
    const portfolioRef = React.useRef(null);

    React.useEffect(() => {
        if (!serviceRef.current || !portfolioRef.current) return;

        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    e.target.style.opacity = "1";
                    e.target.style.top = "0px";
                } else {
                    e.target.style.opacity = "0";
                    e.target.style.top = "100px";
                }
            },
            {
                threshold: [0.1],
            }
        );

        observer.observe(serviceRef.current);
        observer.observe(portfolioRef.current);
        // return () => {
        //     observer.unobserve(serviceRef.current);
        //     observer.unobserve(portfolioRef.current);
        // };
    }, []);

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
                    <div className={styles.image_container}>
                        <ImageNative
                            src={
                                "https://user-images.githubusercontent.com/24651852/187587888-ce8e529f-ecaf-46c7-ae13-1b67f6952292.jpg"
                            }
                            alter="Picture of introduction"
                            width={350}
                            height={466}
                            priority
                        />
                    </div>

                    <Trans
                        t={t}
                        parent={"p"}
                        i18nKey={"text.index.introduction.01"}
                    />
                    <div className={styles.image_container}>
                        <ImageNative
                            className={styles.image}
                            src={
                                "https://user-images.githubusercontent.com/24651852/187587903-559e245c-15de-4aa0-8bf4-23cae3236e06.jpg"
                            }
                            alter="Picture of introduction"
                            width={350}
                            height={262}
                            priority
                        />
                    </div>
                    <Trans
                        t={t}
                        parent={"p"}
                        i18nKey={"text.index.introduction.02"}
                        components={{
                            bold: <span style={{ fontWeight: "bold" }} />,
                        }}
                    />
                </article>
                <article ref={serviceRef} className={styles.service}>
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
                <article ref={portfolioRef} className={styles.portfolio}>
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
