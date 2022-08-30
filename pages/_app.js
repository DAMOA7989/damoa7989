import "../styles/globals.css";
import "../styles/reset.css";
import "styles/global.scss";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
