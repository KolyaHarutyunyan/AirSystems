// import { CompanyNameWrapperStyled, UpperHeaderStyled } from "../styles";

/* Which way of importing is better? and if we have to use jsDoc? */

import { styles } from "..";

export const UpperHeader = ({}) => {
    return (
        <styles.UpperHeaderStyled>
            <styles.CompanyNameWrapperStyled>
                SoCal Air Systems
            </styles.CompanyNameWrapperStyled>
        </styles.UpperHeaderStyled>
    );
};
