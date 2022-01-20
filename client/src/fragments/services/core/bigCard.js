import styled from "styled-components";
import { useWidth, AppSizes, Colors, Devices, TextFonts } from "@eachbase/utils";

export const BigCardStyled = styled.div`
	display: flex;
	flex-direction: ${({ reverse }) => reverse && "row-reverse"};
	align-items: center;
	margin-bottom: 128px;
	@media ${Devices.tablet} {
		margin-bottom: 96px;
	}
	@media ${Devices.mobile} {
		margin-bottom: 72px;
	}

	.left-top {
		left: 0;
		top: 0;
	}

	.right-bottom {
		right: 0;
		bottom: 0;
	}

	.info-section {
		width: 460px;
		height: fit-content;
		padding: ${({ reverse }) => (reverse ? `0 0 0 40px` : `0 40px 0 0`)};
		margin-bottom: 4%;
	}
	.chessImgSection {
		position: relative;
		max-width: 791px;
		width: 100%;
		height: 534px;
		padding: ${({ reverse }) => (reverse ? "32px 0 0 32px" : "0 32px 32px 0")};
		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		& > .layer {
			position: absolute;
			background-color: ${({ bg }) => bg};
			z-index: -1;
			width: 80%;
			height: 85%;
		}
		/* @media ${Devices.tablet} {
      width: 100%;
      height: 432px;
		}
		@media ${Devices.mobile} {
			width: 100%;
			height: 271px;
		} */
	}

	.theme-indigo {
		color: ${Colors.ThemeIndigo};
	}
	.text-primary {
		color: ${Colors.TextPrimary};
	}
	.text-tertiary {
		color: ${Colors.TextTertiary};
	}

	.card-caption-cont {
		display: flex;
		align-items: center;
		.card-caption {
			height: fit-content;
			margin-top: 2px;
			padding-right: 16px;
			@media ${Devices.mobile} {
				padding-right: 8px;
			}
		}
		.card-icon {
			width: 60px;
			height: 60px;
			@media ${Devices.tablet} {
			}
			@media ${Devices.mobile} {
				width: 48px;
				height: 48px;
			}
		}
	}

	.descr-cont {
		margin: 32px 0;
		@media ${Devices.tablet} {
		}
		@media ${Devices.mobile} {
			margin: 24px 0;
		}
	}

	.descr-title {
		display: flex;
		align-items: center;
	}
	.descr-p {
		line-height: 24px;
		font-weight: ${TextFonts["p1.3"].fontWeight};
		margin-top: 16px;
		@media ${Devices.tablet} {
			width: 100%;
		}
		@media ${Devices.mobile} {
			width: 100%;
		}
	}

	.card-list {
		padding-inline-start: 1px;
	}
	.card-list-item {
		line-height: 20px;
		${TextFonts["p1.3"]}
		list-style: none;
		display: flex;
		align-items: center;
		&::before {
			content: "";
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background-color: ${Colors.TextPrimary};
			margin-right: 8px;
		}
	}
	.card-list-item:not(:first-child) {
		margin-top: 8px;
	}
`;

export const BigCard = ({ service, reverse }) => {
	const width = useWidth();
	const { title, list, serviceImage, bgColor, icon } = service;
	console.log(bgColor);
	return (
		<BigCardStyled bg={bgColor} reverse={reverse}>
			<div className="info-section">
				<h2 className={`Heating card-caption-cont theme-indigo`}>
					<span className="card-caption">{title}</span>
					<img className="card-icon" src={icon} alt={`Heating`} />
				</h2>
				<div className="descr-cont">
					<h6 className="descr-title text-primary">NPAA Certified Technicians</h6>
					<p className="descr-p text-tertiary">
						We only hire trained professionals that can handle the job at hand and deliver a
						successful outcome. We only hire trained professionals that can handle the job at
						hand and deliver a successful outcome. We only hire trained professionals that can
						handle the job at hand and deliver a successful outcome.
					</p>
				</div>
				<ul className="card-list">
					{list.map((text) => (
						<li key={text} className="card-list-item text-tertiary">
							{text}
						</li>
					))}
				</ul>
			</div>
			<div className="chessImgSection">
				<div className={`layer ${reverse ? "left-top" : "right-bottom"}`} />
				<img src={serviceImage} alt="title" />
			</div>
		</BigCardStyled>
	);
};

// import { ProvidingServiceCardStyled } from "./styles";

// export const ProvidingServiceCard = ({ service }) => {
// 	const width = useWidth();
// 	const { imageWeb, imageTablet, imageMobile, title, list } = service;
// 	return (
// 		<ProvidingServiceCardStyled>
// 			<img
// 				className="service-card-img"
// 				src={
// 					width <= AppSizes.mobile
// 						? imageMobile
// 						: width <= Devices.tablet
// 						? imageTablet
// 						: imageWeb
// 				}
// 				alt={title}
// 			/>
// 			<h4 className="service-card-title">{title}</h4>
// 			<ul className="service-card-list">
// 				{list.map((text) => (
// 					<li key={text} className="service-card-list-item text-tertiary">
// 						{text}
// 					</li>
// 				))}
// 			</ul>
// 		</ProvidingServiceCardStyled>
// 	);
// };
