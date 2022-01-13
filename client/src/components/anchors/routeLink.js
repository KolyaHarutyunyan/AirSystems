import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLinkStyled, RouteLinkStyled } from "./styles";


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
