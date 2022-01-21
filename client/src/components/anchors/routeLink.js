import { NavLinkStyled, RouteLinkStyled } from "./styles";

export const RouteLink = ({ where, title }) => {
   return (
      <>
         <RouteLinkStyled>
            <NavLinkStyled to={where}>{title}</NavLinkStyled>
         </RouteLinkStyled>
      </>
   );
};
