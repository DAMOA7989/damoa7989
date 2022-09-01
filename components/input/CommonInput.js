import React from "react";
import styles from "styles/components/common_input.module.scss";

const CommonInput = ({ placeholder, value, onChange }) => {
    return (
        <div className={styles.common_input}>
            {!Boolean(value) && (
                <span className={styles.placeholder}>{placeholder}</span>
            )}
            <div className={styles.search_icon} />
            <input className={styles.input} value={value} onChange={onChange} />
        </div>
    );
};

export default CommonInput;
