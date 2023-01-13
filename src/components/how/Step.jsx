import * as React from "react";

// mui components
import { Grid, Box } from "@mui/material";

// styles
import styles from "./Step.module.scss";
import classNames from "classnames";

export default function Step({ number, title = "", description = "" }) {
    return (
        <Grid item xs={12}>
            <Box
                className={classNames(styles.step_container)}
                display="flex"
                justifyContent="space-between"
            >
                <div className={styles.step_number_container}>
                    <h1 className={classNames(styles.step_number)}>{number}</h1>
                </div>
                <Grid container rowSpacing={1} gridRow={number} gridColumn={1}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            padding: "30 !important",
                            margin: "0 !important",
                            width: "10.47vw !important",
                            height: "2.46vh",
                        }}
                    >
                        <h1 className={classNames(styles.step_title)}>
                            {title}
                        </h1>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            padding: "0 !important",
                            margin: "0 !important",
                        }}
                    >
                        <p className={classNames(styles.step_description)}>
                            {description}
                        </p>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
