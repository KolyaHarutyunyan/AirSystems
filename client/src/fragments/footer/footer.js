import { Divider } from "@mui/material";
import { Colors } from "@eachbase/utils";
import { UpperFooter } from "./upperFooter";
import { FooterStyled } from "./styles";

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
                  <span className="conditions">{"Terms & Conditions"}</span>
                  <span className="privacy">Privacy Policy</span>
               </div>
            </div>
         </div>
      </FooterStyled>
   );
};
