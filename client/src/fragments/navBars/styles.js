import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const MainNavbarStyled = styled.div`
    position: fixed;
    top: 24px;
    right: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: ${Colors.BackgroundPrimary};
    height: 60px;
    padding: 0 60px 0 4px;
`;
