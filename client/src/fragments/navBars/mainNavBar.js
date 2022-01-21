import React from "react";
import { Routes } from "@eachbase/utils/routes";
import { RouteLink } from "@eachbase/components/anchors/routeLink";
import { MainNavbarStyled } from "./styles";
import { Button } from "@eachbase/components/buttons";
import { Colors } from "@eachbase/utils";

export const MainNavBar = ({ className }) => {
   return (
      <MainNavbarStyled className={className}>
         {Object.values(Routes).map(({ title, path }) => (
            <RouteLink key={path} title={title} where={path}></RouteLink>
         ))}
      </MainNavbarStyled>
   );
};
