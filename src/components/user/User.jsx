import * as React from "react";

// components
import Avatar from "../avatar/Avatar";

// styles
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({
    name = "",
    info = "",
    avatar = "",
    size = 55,
    verified = false,
}) {
    return (
        <div className={classNames(styles.user)}>
            <div className={classNames(styles.user_avatar_item_container)}>
                <Avatar url={avatar} size={size} verified={verified}></Avatar>
            </div>
            <div
                className={classNames(styles.user_name_and_info_item_container)}
            >
                <p className={classNames(styles.name)}>{name}</p>
                <p className={classNames(styles.info)}>{info}</p>
            </div>
        </div>
    );
}
