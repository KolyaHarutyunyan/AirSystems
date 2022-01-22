import styled from "styled-components";
import { Devices } from "@eachbase/utils";

export const HorizontalDividerStyled = styled.div`
    height: 0;
    width: ${(props) => props.length};
    border-bottom: ${(props) => props.bb};

    @media ${Devices.tablet} {
        display: ${(props) => props.onlyWeb ? "none" : "block"};
    }
`;
