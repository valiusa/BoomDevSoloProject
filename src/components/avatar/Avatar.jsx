import * as React from "react";

// mui components
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// styles
import { styled } from "@mui/material/styles";
import classNames from "classnames";
import styles from "./Avatar.module.scss";

const Verified = styled(Avatar)(({ theme }) => ({
    width: theme.width,
    height: theme.height,
}));

export default function AvatarImage({ url, size = 90, verified = false }) {
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
        // <Stack direction="row" spacing={2}>
        //     <Badge
        //         overlap="circular"
        //         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        //         badgeContent={
        //             <Verified
        //                 alt="verified icon"
        //                 src="../images/verified.svg"
        //                 sx={{ width: size / 4, height: size / 4 }}
        //             />
        //         }
        //     >
        //         <Avatar
        //             alt="Avatar"
        //             src={url}
        //             sx={{ width: size, height: size }}
        //         />
        //     </Badge>
        // </Stack>
    );
}
