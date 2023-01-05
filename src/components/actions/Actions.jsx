import * as React from "react";

// mui components
import { Select, Grid, MenuItem, Box } from "@mui/material";
import Container from "@mui/material/Container";

// components
import Card from "../card/Card";

// styles
import styles from "./Actions.module.scss";
import classNames from "classnames";

export default function Actions({ cards = [] }) {
    return (
        <div className={classNames(styles.liveaction_wrapper)}>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between">
                    <h1 className={classNames(styles.header)}>
                        🔥 Live Actions
                    </h1>
                    <Select
                        sx={{
                            width: "200px",
                            borderRadius: "10px",
                        }}
                    >
                        <MenuItem value={1}>This week</MenuItem>
                    </Select>
                </Box>
                <Grid container spacing={2}>
                    {cards.map((card) => (
                        <Grid item xs={3} key={card.name}>
                            <Card
                                name={card.name}
                                likes={1100}
                                mediaUrl={card.mediaUrl}
                                user={card.user}
                                price={card.price}
                                currency={card.currency}
                                timeLeft={card.timeLeft}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
