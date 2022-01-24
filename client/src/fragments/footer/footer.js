import { Divider } from "@mui/material";
import { Colors } from "@eachbase/utils";
import { UpperFooter } from "./upperFooter";
import { FooterStyled } from "./styles";
import { Link } from "react-router-dom";

export const Footer = () => {
   return (
      <FooterStyled>
         <div className="footer-content">
            <UpperFooter />
            <Divider
               style={{
                  borderColor: Colors.Divider,
               }}
            />
            <div className="lower-footer">
               <span className="rights">SoCal Air Systems 2021. All rights reserved.</span>
               <div className="rules">
                  <Link to="/termsAndConditions" className="conditions">
                     {"Terms & Conditions"}
                  </Link>
                  <Link to="/privacyPolicy" className="privacy">
                     Privacy Policy
                  </Link>
               </div>
            </div>
         </div>
      </FooterStyled>
   );
};
