import { Colors, TextFonts } from "@eachbase/utils";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const RouteLinkStyled = styled.span`
    padding: 0 20px;
    height: 100%;
    vertical-align: center;
    display: flex;
    align-items: center;
`;

let {fontSize, fontWeight} = TextFonts["p1.1"];

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    font-size: ${fontSize};
    font-weight: ${props => props.isMatch ? fontWeight : 'inherit'};
    line-height: 20px;
    color: #374957;
    border-bottom: ${props => props.isMatch && `2px solid ${Colors.ThemeGreen}`};
`;

export const RouteLink = ({ where, title }) => {
    const [isMatch, setIsMatch] = useState(false);
    let location = useLocation();

    useEffect(() => {
        setIsMatch(location.pathname === where);
    }, [location]);

    return (
        <>
            <RouteLinkStyled>
                <NavLinkStyled
                    to={where}
                    isMatch={isMatch}
                >
                    {title}
                </NavLinkStyled>
            </RouteLinkStyled>
        </>
    );
};
