import "../styles/globals.css";
import "../styles/reset.css";
import "styles/global.scss";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="beforeInteractive"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_WEB_DYNAMIC_MAP_CLIENT_ID}`}
            ></Script>
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
