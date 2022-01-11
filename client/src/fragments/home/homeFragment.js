import styled from "styled-components";
import { styles } from "./core";
import { Images } from "../../assets";
import { Header } from "./core/header/header";

const TittleH1Styled = styled.h1``;

const FooterStyled = styled.footer``;

export const HomeFragment = ({}) => {
    const classes = styles.homeFragments();
    return (
        <>
            <Header />
            {/* <main style={{ height: "100vh", width: "100%", 'background-color': "lightblue" }}></main> */}
        </>
    );
};
