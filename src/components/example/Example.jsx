import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";

//import Trending from "../trending/Trending";
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import How from "../how/How";

export default function Copyright() {
    const _cards = [
        {
            name: "Ivy",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 1,
            currency: "ETH",
            timeLeft: 40000,
        },
        {
            name: "Judie",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 2.3,
            currency: "ETH",
            timeLeft: 30000,
        },
        {
            name: "Juniper",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 5,
            currency: "ETH",
            timeLeft: 20000,
        },
        {
            name: "Maple",
            user: {
                avatar: {
                    url: "images/avatar.png",
                },
                verified: true,
            },
            mediaUrl: "images/nft.jpg",
            price: 10,
            currency: "ETH",
            timeLeft: 10000,
        },
    ];

    const card = {
        name: "Ivy",
        likes: 1100,
        user: {
            avatar: {
                url: "images/avatar.png",
            },
            verified: true,
        },
        mediaUrl: "images/nft.jpg",
        price: "~12.5",
        currency: "ETH",
        timeLeft: 0,
    };

    const items = [
        {
            number: 1,
            title: "DIGITAL CURRENCY",
            description:
                "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange.",
        },
        {
            number: 2,
            title: "CRYPTO WALLET",
            description:
                "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
        },
        {
            number: 3,
            title: "BUM.",
            description:
                "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
        },
    ];

    const description = `Discover, collect, and sell extraordinary NFTs
on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.`;

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                {/* <Paper className={classNames(styles.paper)}>
                    <Link href="/about" color="secondary">
                        Hi
                    </Link>
                </Paper> */}
                {/* <Trending cards={_cards} /> */}
                {/* <Auctions cards={_cards} /> */}
                {/* <Card
                    name={card.name}
                    likes={1100}
                    mediaUrl={card.mediaUrl}
                    user={card.user}
                    price={card.price}
                    currency={card.currency}
                    timeLeft={card.timeLeft}
                /> */}
                {/* <Footer /> */}
                <How
                    title={"HOW IT WORKS"}
                    description={description}
                    items={items}
                    link={"#"}
                />
            </Container>
        </div>
    );
}
