import styled from "styled-components";
import { homeFragments } from "./core";
import { Images } from "../../assets";
import { Header } from "./core/header";
import { Footer } from "./core/footer";

const TittleH1Styled = styled.h1``;

const FooterStyled = styled.footer``;

export const HomeFragment = ({}) => {
    const classes = homeFragments();
    return (
        <>
            <Header />
            <main style={{ height: "100vh", width: "100%", 'background-color': "lightblue" }}></main>
            <Footer />
        </>
    );
};
