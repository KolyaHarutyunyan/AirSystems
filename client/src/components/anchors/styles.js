import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";
import { NavLink } from "react-router-dom";

export const RouteLinkStyled = styled.span`
   padding: 0 20px;
   height: 100%;
   vertical-align: center;
   display: flex;
   align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
   ${TextFonts["p1.3"]};
   text-decoration: none;
   line-height: 20px;
   color: ${Colors.TextSecondary};
   border-bottom: 2px solid transparent;
   &.active {
      font-weight: bold;
      color: ${Colors.TextPrimary};
      border-bottom: 2px solid ${Colors.ThemeGreen};
   }
`;
