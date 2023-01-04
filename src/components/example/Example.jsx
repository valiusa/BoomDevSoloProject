import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

import Card from "../card/Card";

export default function Copyright() {
    const _user = {
        avatar: {
            url: "../images/avatar.png",
        },
        verified: true,
    };

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                {/* <Paper className={classNames(styles.paper)}>
                    <Link href="/about" color="secondary">
                        Hi
                    </Link>
                </Paper> */}
                <Card
                    name={"Clock"}
                    likes={1100}
                    mediaUrl={"../images/nft.jpg"}
                    user={_user}
                    price={"~12.2"}
                    currency={"ETH"}
                />
            </Container>
        </div>
    );
}
