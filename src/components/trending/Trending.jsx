import * as React from "react";

// mui components
import { Select, Container, Grid, MenuItem, Box } from "@mui/material";

// components
import Card from "../card/Card";

// styles
import styles from "./Trending.module.scss";
import classNames from "classnames";

export default function Trending({ cards = [] }) {
    return (
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between">
                <h1 className={classNames(styles.header)}>Trending</h1>
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
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
