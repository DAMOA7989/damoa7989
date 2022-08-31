/*global kakao*/
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
    const mapRef = React.useRef(null);

    const [mapLoaded, setMapLoaded] = React.useState(false);

    React.useEffect(() => {
        const $script = window.document.createElement("script");
        $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=clusterer`;
        $script.addEventListener("load", () => setMapLoaded(true));
        window.document.body.appendChild($script);
    }, []);

    React.useEffect(() => {
        if (!mapLoaded) return;

        window.kakao.maps.load(() => {
            const map = new window.kakao.maps.Map(mapRef.current, {
                center: new window.kakao.maps.LatLng(37.507551, 127.060561),
            });
            const clusterer = new window.kakao.maps.MarkerClusterer({
                map: map,
            });
            clusterer.addMarker(
                new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(
                        37.507551,
                        127.060561
                    ),
                })
            );
        });
    }, [mapLoaded]);

    return (
        <AppLayout title={t("tab.contact")}>
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
                            ref={mapRef}
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
