import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

//import Logo from "../logo/Logo";
//import Header from "../header/Header";
import Avatar from "../avatar/Avatar";

export default function Copyright() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                {/* <Paper className={classNames(styles.paper)}>
                    <Link href="/about" color="secondary">
                        Hi
                    </Link>
                    <Logo type="muted"></Logo>
                </Paper> */}
                {/* <Header></Header> */}
                <Avatar
                    url={"../images/avatar.png"}
                    size={200}
                    verified={true}
                />
            </Container>
        </div>
    );
}
