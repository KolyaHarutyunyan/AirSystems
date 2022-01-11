import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";
import { NavLink } from "react-router-dom";

export const RouteLinkStyled = styled.span`
    padding: 0 20px;
    height: 100%;
    vertical-align: center;
    display: flex;
    align-items: center;
`;

let { fontSize, fontWeight } = TextFonts["p1.1"];

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    font-size: ${fontSize};
    font-weight: ${(props) => (props.isMatch ? fontWeight : "inherit")};
    line-height: 20px;
    color: ${Colors.TextSecondary};
    border-bottom: ${(props) =>
        props.isMatch && `2px solid ${Colors.ThemeGreen}`};
`;
