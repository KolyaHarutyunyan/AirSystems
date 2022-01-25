import { Routes } from "@eachbase/utils";
import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled, HeaderContentStyled } from "./styles";

export const Header = ({ img, minHeight, bgPosition, titleCont, content }) => {
	return (
		<HeaderStyled img={img} bgPosition={bgPosition}>
			<div className="header-backdrop">
				<HeaderContentStyled minHeight={minHeight}>
					<div className="upper-header">
						<h6 className="background-primary">
							<NavLink to={Routes.home.path}>SoCal Air Systems</NavLink>
						</h6>
					</div>
					{titleCont}
					<div className="lower-header">{content}</div>
				</HeaderContentStyled>
			</div>
		</HeaderStyled>
	);
};
