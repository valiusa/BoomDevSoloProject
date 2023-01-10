import * as React from "react";

// mui components
import { Grid, Container, Typography, Button } from "@mui/material";

// components
import Logo from "../logo/Logo";

// styles
import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer() {
    return (
        <footer className={classNames(styles.footer)}>
            <Container maxWidth="lg">
                <Grid container rowSpacing={1}>
                    <Grid item xs={4}>
                        <Logo type="muted" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="body2"
                            className={classNames(styles.text)}
                            sx={{ paddingTop: 2 }}
                        >
                            Bum All Rights Reserved 2023
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ paddingTop: 1.6 }}>
                            <Button
                                className={classNames(styles.footer_button)}
                                variant="contained"
                                href="#"
                            >
                                Privacy Policy
                            </Button>
                            <Button
                                className={classNames(styles.footer_button)}
                                variant="contained"
                                href="#"
                            >
                                Cookie Policy
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}
