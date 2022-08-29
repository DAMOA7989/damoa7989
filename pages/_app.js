import "../styles/globals.css";
import "../styles/reset.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
