import "../styles/globals.css";
import "../styles/reset.css";
import "styles/global.scss";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
    title: "다모아7989",
    description: "친구 팔고 다 모아",
    canonical: "https://damoa7989.xyz",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://damoa7989.xyz",
        title: "다모아7989: 친구 팔고 다 모아",
        site_name: "다모아7989",
        images: [
            {
                url: "https://damoa7989.xyz/favicon.ico",
                width: 40,
                height: 40,
                alt: "image",
            },
        ],
    },
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO} />
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
