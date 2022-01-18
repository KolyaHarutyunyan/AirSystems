import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const MainNavbarStyled = styled.div`
    position: absolute;
    z-index: 1;
    top: 24px;
    right: 0;
    /* left: calc(100% - 728px); */
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: ${Colors.BackgroundPrimary};
    /* width: 728px; */
    height: 60px;
    padding: 0 60px 0 4px;
    box-shadow: 0px 2px 4px #00000014;
    @media ${Devices.tablet} {
        display: none;
    }
`;
