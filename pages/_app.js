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
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=clusterer`}
            ></Script>
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
