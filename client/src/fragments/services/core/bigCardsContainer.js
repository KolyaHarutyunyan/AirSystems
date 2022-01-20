import { Devices, Services } from "@eachbase/utils";
import styled from "styled-components";
import { BigCard } from "./bigCard";

const BigCardsContainerStyled = styled.section`
	width: 100%;
	max-width: 1440px;
	padding: 0 80px;
	@media ${Devices.tablet} {
		width: 100%;
		padding: 0 32px;
	}
	@media ${Devices.mobile} {
		width: 100%;
		padding: 0 16px;
	}
`;

export const BigCardsContainer = () => {
	return (
		<BigCardsContainerStyled>
			{Services.map((service, ind) => (
				<BigCard reverse={ind % 2} key={service.title} service={service} />
			))}
		</BigCardsContainerStyled>
	);
};
