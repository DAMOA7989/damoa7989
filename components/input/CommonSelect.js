import React from "react";
import styles from "styles/components/common_select.module.scss";
import { useTranslation } from "next-i18next";

const CommonSelect = ({ value, onChange, placeholder, datas }) => {
    const { t } = useTranslation();
    const [showDropdown, setShowDropdown] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const eventHandler = (event) => {
            if (containerRef.current.contains(event.target)) {
                return;
            }

            setShowDropdown(false);
        };

        window.document.addEventListener("click", eventHandler);
        return () => window.document.removeEventListener("click", eventHandler);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${styles.container} ${showDropdown && "active"}`}
        >
            <div
                className={`${styles.common_select} ${
                    showDropdown && styles.common_select_active
                }`}
                onClick={() => setShowDropdown(!showDropdown)}
            >
                {Boolean(value?.i18nKey) ? (
                    <span className={styles.value}>{t(value?.i18nKey)}</span>
                ) : (
                    <span className={styles.placeholder}>{placeholder}</span>
                )}
            </div>
            <div className={styles.dropdown}>
                {showDropdown && (
                    <ul className={styles.dropdown_ul}>
                        {(datas || []).map((data, idx) => (
                            <li key={idx} className={styles.dropdown_ul_li}>
                                <div
                                    className={styles.dropdown_ul_li_container}
                                    onClick={() => {
                                        onChange && onChange(data);
                                        setShowDropdown(false);
                                    }}
                                >
                                    {t(data.i18nKey)}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CommonSelect;
