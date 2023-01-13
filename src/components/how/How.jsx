import * as React from "react";

// mui components
import { Button, Container, Grid } from "@mui/material";

// components
import Step from "./Step";

// styles
import styles from "./How.module.scss";
import classNames from "classnames";

export default function How({
    title = "",
    description = "",
    items = [],
    link = "",
}) {
    return (
        <div className={classNames(styles.how_container)}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            //justifyContent: "center",
                        }}
                    >
                        <Grid
                            container
                            rowSpacing={0}
                            gridRow={3}
                            gridColumn={1}
                        >
                            <Grid item xs={12}>
                                <h1 className={classNames(styles.how_title)}>
                                    {title}
                                </h1>
                            </Grid>
                            <Grid item xs={12}>
                                <p
                                    className={classNames(
                                        styles.how_description
                                    )}
                                >
                                    {description}
                                </p>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classNames(
                                        styles.learn_more_btn
                                    )}
                                    variant="contained"
                                    href={link}
                                >
                                    LEARN MORE
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid
                            container
                            rowSpacing={3}
                            gridRow={3}
                            gridColumn={1}
                        >
                            {items.map((item) => (
                                <Step
                                    number={item.number}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
