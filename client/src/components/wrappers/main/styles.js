import { Colors } from "@eachbase/utils";
import styled from "styled-components";

export const MainStyled = styled.main`
   flex-grow: 1;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   & .logo-box {
      width: 152px;
      height: 22px;
      & a img {
         width: 100%;
         object-fit: contain;
      }
   }
`;
