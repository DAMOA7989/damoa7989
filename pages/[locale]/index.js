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

const portfolioItems = [
    {
        key: "munchskill",
        imgSrc: imageMunchSkill,
        desc: "text.portfolio.00",
    },
    {
        key: "orbitbridge",
        imgSrc: imageOrbitBridge,
        desc: "text.portfolio.01",
    },
    {
        key: "sole-x",
        imgSrc: imageSoleX,
        desc: "text.portfolio.02",
    },
];

const peopleItems = [
    {
        key: "walter",
        imgPath: "/images/common/index.team.people.walter.png",
        width: 350,
        height: 252,
        cardText: "text.index.people_walter_text",
        namePosition: "Walter / Founder",
    },
];

export default function Home() {
    const { t } = useTranslation("common");
    const router = useRouter();
    const corporationDescRef = React.useRef(null);
    const serviceRef = React.useRef(null);
    const portfolioRef = React.useRef(null);
    const peopleRef = React.useRef(null);
    const introductionImageRefs = [React.useRef(null), React.useRef(null)];

    React.useEffect(() => {
        if (
            !introductionImageRefs[0].current ||
            !introductionImageRefs[1].current
        )
            return;

        introductionImageRefs[0].current.children[0].src =
            "https://firebasestorage.googleapis.com/v0/b/damoa7989-35f5a.appspot.com/o/index%2Fintroduction.00.png?alt=media&token=58b3f74e-9671-4fe3-a735-dd5e823add16";
        introductionImageRefs[1].current.children[0].src =
            "https://firebasestorage.googleapis.com/v0/b/damoa7989-35f5a.appspot.com/o/index%2Fintroduction.01.png?alt=media&token=faec6578-2d3e-44a9-91de-a8aa871fe2ba";
    }, [introductionImageRefs[0].current, introductionImageRefs[1].current]);

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

        const observer2 = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1)";
                } else {
                    e.target.style.opacity = "0";
                    e.target.style.transform = "scale(0.9)";
                }
            },
            {
                threshold: [0.1],
            }
        );

        observer.observe(serviceRef.current);
        observer.observe(portfolioRef.current);
        observer.observe(corporationDescRef.current);
        observer2.observe(peopleRef.current);
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
                    <div
                        ref={introductionImageRefs[0]}
                        className={styles.image_container}
                    >
                        <img
                            src={""}
                            alter="Picture of introduction"
                            width={350}
                            height={220}
                        />
                    </div>

                    <Trans
                        t={t}
                        parent={"p"}
                        i18nKey={"text.index.introduction.01"}
                    />
                    <div
                        ref={introductionImageRefs[1]}
                        className={styles.image_container}
                    >
                        <img
                            src={""}
                            alter="Picture of introduction"
                            width={350}
                            height={201}
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
                <div className={styles.corporation}>
                    <p
                        ref={corporationDescRef}
                        className={styles.corporation_desc}
                    >
                        <Trans
                            t={t}
                            i18nKey={"text.index.corporation_desc"}
                            components={{
                                bold: (
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                        }}
                                    />
                                ),
                            }}
                        />
                    </p>
                    <article className={styles.service}>
                        <h3 className={styles.title}>
                            {t("title.index.service")}
                        </h3>
                        <div ref={serviceRef} className={styles.service_fade}>
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
                                    router.push(
                                        "/service_and_portfolio/#service"
                                    );
                                }}
                            >
                                {t("btn.detail")}
                            </button>
                        </div>
                    </article>
                    <article className={styles.portfolio}>
                        <h3 className={styles.title}>
                            {t("title.index.portfolio")}
                        </h3>
                        <div
                            ref={portfolioRef}
                            className={styles.portfolio_fade}
                        >
                            <div className="slider">
                                <div className="slides">
                                    {portfolioItems.map((item) => (
                                        <div
                                            key={item.key}
                                            className="slide"
                                            onClick={() => {}}
                                        >
                                            <div
                                                className={`${styles.slide_image} slide_image`}
                                            >
                                                <Image
                                                    src={item.imgSrc}
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div
                                                className="description"
                                                style={{ textAlign: "center" }}
                                            >
                                                {t(item.desc)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                className={styles.detail_btn}
                                onClick={() => {
                                    router.push(
                                        "/service_and_portfolio/#portfolio"
                                    );
                                }}
                            >
                                {t("btn.detail")}
                            </button>
                        </div>
                    </article>
                </div>
                <div className={styles.team}>
                    <h3 className={styles.title}>{t("title.index.team")}</h3>
                    <div className={styles.desc}>
                        <h5 className={styles.desc_main}>
                            <Trans t={t} i18nKey={"text.index.desc_main"} />
                        </h5>
                        <p className={styles.desc_sub}>
                            <Trans t={t} i18nKey={"text.index.desc_sub"} />
                        </p>
                    </div>
                    <div ref={peopleRef} className={styles.people}>
                        <div className="slider">
                            <div className="slides">
                                {peopleItems.map((item) => (
                                    <div className={`${styles.card} slide`}>
                                        <div
                                            className={`${styles.image_container} ${styles.people_card_image_container}`}
                                        >
                                            <ImageNative
                                                src={item.imgPath}
                                                width={item.width}
                                                height={item.height}
                                            />
                                        </div>
                                        <p className={styles.people_card_text}>
                                            <Trans
                                                t={t}
                                                i18nKey={item.cardText}
                                            />
                                        </p>
                                        <div
                                            className={styles.people_card_name}
                                        >
                                            {item.namePosition}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.indicator}></div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
