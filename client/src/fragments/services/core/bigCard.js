import styled from "styled-components";
import { useWidth, AppSizes, Colors, Devices, TextFonts } from "@eachbase/utils";

export const BigCardStyled = styled.div`
	display: flex;
	flex-direction: ${({ reverse }) => reverse && "row-reverse"};
	align-items: center;
	margin-bottom: 128px;
	@media ${Devices.tablet} {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 96px;
	}
	@media ${Devices.mobile} {
		align-items: flex-start;
		margin-bottom: 72px;
	}

	.info-section {
		width: 100%;
		max-width: 450px;
		padding: ${({ reverse }) => (reverse ? `0 0 0 40px` : `0 40px 0 0`)};
		margin-bottom: 4%;
		@media ${Devices.tablet} {
			max-width: 80%;
			padding: 0;
			margin-bottom: 0;
		}
		@media ${Devices.mobile} {
			width: 100%;
		}
		
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
	}

	.card-list {
		display: flex;
		flex-direction: column;
		padding-inline-start: 1px;
		@media ${Devices.tablet} {
			flex-direction: row;
			align-items: center;
		}
		@media ${Devices.mobile} {
			flex-direction: column;
		}
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

export const ChessImgSectionStyled = styled.div`
	position: relative;
	max-width: 791px;
	width: 100%;
	height: 534px;
	padding: ${({ reverse }) => (reverse ? "32px 0 0 32px" : "0 32px 32px 0")};
	@media ${Devices.tablet} {
		max-width: 100%;
		height: 432px;

		margin: 32px 0 0;
	}
	@media ${Devices.mobile} {
		height: 271px;
		padding: ${({ reverse }) => (reverse ? "24px 0 0 24px" : "0 24px 24px 0")};
		margin: 24px 0;
	}
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

	.left-top {
		left: 0;
		top: 0;
	}
	.right-bottom {
		right: 0;
		bottom: 0;
	}
`;

export const ChessImgSection = ({ img, bg, reverse }) => {
	return (
		<ChessImgSectionStyled bg={bg} reverse={reverse}>
			<div className={`layer ${reverse ? "left-top" : "right-bottom"}`} />
			<img src={img} alt="title" />
		</ChessImgSectionStyled>
	);
};

export const BigCard = ({ service, reverse }) => {
	const width = useWidth();
	const { title, list, serviceImage, bgColor, icon } = service;
	const mobile = parseInt(AppSizes.mobile);
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
				{width <= mobile && (
					<ChessImgSection bg={bgColor} img={serviceImage} reverse={reverse} />
				)}
				<ul className="card-list">
					{list.map((text) => (
						<li key={text} className="card-list-item text-tertiary">
							{text}
						</li>
					))}
				</ul>
			</div>
			{width > mobile && <ChessImgSection bg={bgColor} img={serviceImage} reverse={reverse} />}
		</BigCardStyled>
	);
};
