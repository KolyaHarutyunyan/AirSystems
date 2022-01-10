import { Colors, TextFonts } from "@eachbase/utils";
import styled from "styled-components";
import { Images } from "../../../../assets";
import { Routes } from "@eachbase/utils/routes"
import { RouteLink } from "@eachbase/components/anchors/routeLink";

const UpperHeaderStyled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: brown;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100px;
`;

let { fontSize, fontWeight } = TextFonts;

const CompanyNameWrapperStyled = styled.div`
    color: ${Colors.BackgroundWhite};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
`;

const NavbarStyled = styled.div`
    background-color: ${Colors.BackgroundWhite};
`;

export const UpperHeader = ({}) => {
    return (
        <UpperHeaderStyled>
            <CompanyNameWrapperStyled>
                SoCal Air Systems
            </CompanyNameWrapperStyled>
            <NavbarStyled>
                {Object.values(Routes).map(({title, path}) => (
                    <RouteLink where={path}>{title}</RouteLink>
                ))}
            </NavbarStyled>
        </UpperHeaderStyled>
    );
};
