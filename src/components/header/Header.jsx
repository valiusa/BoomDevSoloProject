import * as React from "react";

// mui components
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// components
import Logo from "../logo/Logo";

// styles
import { styled, alpha } from "@mui/material/styles";
import styles from "../header/Header.module.scss";
import classNames from "classnames";

// grid item
const Item = styled(Container)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
}));

// search
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(0),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 3, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "30ch",
        },
    },
}));

export default function Header() {
    return (
        <Container
            className={classNames(styles.header_container)}
            maxWidth="xl"
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>
                            <Logo></Logo>
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Find items, users and activities"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                        </Item>
                    </Grid>
                    <Grid item xs>
                        {/* <Item>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <Item>
                                        <Button
                                            variant="text"
                                            sx={{ color: "white" }}
                                        >
                                            Home
                                        </Button>
                                    </Item>
                                </Grid>
                                <Grid item xs={5}>
                                    <Item>
                                        <Button
                                            variant="text"
                                            sx={{ color: "white" }}
                                        >
                                            Activity
                                        </Button>
                                    </Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>
                                        <Button variant="contained">
                                            EXPLORE
                                        </Button>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Item> */}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
