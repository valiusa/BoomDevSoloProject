import * as React from "react";

// styles
import classNames from "classnames";
import styles from "./Avatar.module.scss";

export default function Avatar({ url, size = 90, verified = false }) {
    return (
        <div className={classNames(styles.avatar)} width={size} height={size}>
            <img
                alt="avatar"
                src={url}
                width={size}
                height={size}
                className={classNames(styles.image)}
            />
            <img
                alt="verified icon"
                src="../images/verified.svg"
                className={classNames(styles.badge)}
                width={size / 4}
                height={size / 4}
            />
        </div>
    );
}
