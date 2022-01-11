import { Colors, TextFonts } from "@eachbase/utils";
import styled from "styled-components";

const UpperHeaderStyled = styled.section`
    flex: 1;
    display: flex;
    justify-content: space-between;
`;

const CompanyNameWrapperStyled = styled.h6`
    color: ${Colors.BackgroundWhite};
    position: absolute;
    top: 43px;
`;

export const UpperHeader = ({}) => {
    return (
        <UpperHeaderStyled>
            <CompanyNameWrapperStyled>
                SoCal Air Systems
            </CompanyNameWrapperStyled>
        </UpperHeaderStyled>
    );
};
