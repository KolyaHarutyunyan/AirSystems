import { NavLinkStyled, RouteLinkStyled } from "./styles";

export const RouteLink = ({ where, title }) => {
   return (
      <>
         <RouteLinkStyled>
            <NavLinkStyled exact to={where} activeClassName={"active"}>
               {title}
            </NavLinkStyled>
         </RouteLinkStyled>
      </>
   );
};
