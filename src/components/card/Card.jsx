import * as React from "react";
import millify from "millify";

// mui components
import { default as MuiCard } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// components
import Avatar from "../avatar/Avatar";

// styles
import { styled } from "@mui/material/styles";
import styles from "./Card.module.scss";
import classNames from "classnames";

// grid item
const Item = styled(Container)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
}));

export default function Card({
    name = "",
    likes = 0,
    mediaUrl = "",
    user = { avatar: { url: "" }, verified: false },
    price = "",
    currency = "",
}) {
    return (
        <MuiCard
            className={classNames(styles.card)}
            sx={{ maxWidth: 325, borderRadius: 0.5 }}
        >
            <CardHeader
                sx={{ paddingLeft: 0 }}
                avatar={
                    <Avatar
                        url={user.avatar.url}
                        size={33}
                        verified={user.verified}
                    />
                }
                title=""
                subheader=""
            />
            <CardMedia
                className={classNames(styles.media)}
                component="img"
                height="286"
                image={mediaUrl}
                alt="nft"
            />
            <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} justifyContent="flex-start">
                            <h5 className={classNames(styles.title)}>{name}</h5>
                            <p className={classNames(styles.price)}>
                                {price} {currency}
                            </p>
                        </Grid>
                        <Grid item xs={6} justifyContent="flex-end">
                            <div className={classNames(styles.likes)}>
                                <Button
                                    sx={{
                                        padding: 0.6,
                                        width: 1,
                                        color: "#24f25e",
                                        border: "1px solid #24f25e",
                                        backgroundColor:
                                            "rgba(36, 242, 94, 0.1)",
                                        fontFamily: "Montserrat",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                        lineHeight: "1rem",
                                    }}
                                    variant="outlined"
                                    startIcon={<Favorite />}
                                >
                                    {millify(likes)}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </MuiCard>
    );
}
