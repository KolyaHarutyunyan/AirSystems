import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const MainNavbarStyled = styled.div`
    background-color: ${Colors.BackgroundPrimary};
    position: fixed;
    top: 24px;
    right: 0;
    padding: 0 60px 0 4px;
    height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
`;
