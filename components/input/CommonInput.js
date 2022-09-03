import React from "react";
import styles from "styles/components/common_input.module.scss";

const CommonInput = ({
    placeholder,
    value,
    onChange,
    className,
    type,
    multiline,
    icon,
}) => {
    const textareaRef = React.useRef(null);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        if (!!multiline) {
            if (textareaRef.current && containerRef.current) {
                const textarea = textareaRef.current;
                const container = containerRef.current;

                textarea.style.height = "auto";
                const height = textarea.scrollHeight;
                textarea.style.height = `${height}px`;
                container.style.height = `${height + 32}px`;
            }
        }
    }, [multiline, value]);

    return (
        <div
            ref={containerRef}
            className={`${styles.common_input} ${className}`}
        >
            {!Boolean(value) && (
                <span className={styles.placeholder}>{placeholder}</span>
            )}
            {icon && <div className={styles.search_icon} />}
            {!!multiline ? (
                <textarea
                    ref={textareaRef}
                    className={styles.text_area}
                    type={type}
                    value={value}
                    onChange={onChange}
                    rows="1"
                />
            ) : (
                <input
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default CommonInput;
