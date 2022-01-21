import { Images } from "@eachbase/assets";
import { Devices } from "@eachbase/utils";
import styled from "styled-components";
import { Colors, TextFonts } from "../../utils/globalUi";

let { fontSize, fontWeight } = TextFonts.p2;

export const FooterStyled = styled.footer`
	flex-shrink: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: ${Colors.BackgroundSecondary};
	.footer-content {
		max-width: 1440px;
		width: 100%;
		justify-content: space-between;
		padding: 80px 80px 31px;
		@media ${Devices.tablet} {
			padding: 48px 32px 23px;
		}
		@media ${Devices.mobile} {
			padding: 32px 16px 15px;
		}
		& .lower-footer {
			width: 100%;
			color: ${Colors.TextTertiary};
			line-height: 24px;
			font-size: ${fontSize};
			font-weight: ${fontWeight};
			display: flex;
			justify-content: space-between;
			margin-top: 16px;
			@media ${Devices.mobile} {
				flex-direction: column-reverse;
			}
		}
		.rules {
			@media ${Devices.mobile} {
				margin-bottom: 15px;
			}
			.privacy {
				margin-left: 32px;
			}
		}
	}
`;

export const UpperFooterStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 64px;
	@media ${Devices.tablet} {
		flex-direction: column-reverse;
		margin-bottom: 40px;
	}
	.indigo-heading {
		color: ${Colors.ThemeIndigo};
	}
	.socal-media {
		max-width: 220px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		line-height: 22px;
	}
	.socal-la {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.theme-green {
		color: ${Colors.ThemeGreen};
	}
	.quality {
		line-height: 20px;
		${TextFonts["p1.1"]};
		color: ${Colors.TextPrimary};
	}
	.follow-container__socal-comp {
		display: flex;
		align-items: center;
		margin-bottom: 48px;
		@media ${Devices.tablet} {
			display: none;
		}
	}
	.logos-container {
		display: flex;
		padding-left: 16px;
	}
	.contact-subscribe-box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-left: 110px;
		@media ${Devices.tablet} {
			margin-left: 0;
			margin-bottom: 40px;
		}
		@media ${Devices.mobile} {
			flex-direction: column;
			margin-bottom: 52px;
		}
		.contact-us {
			max-width: 347px;
			width: 100%;
			display: flex;
			flex-direction: column;
			@media ${Devices.tablet} {
				max-width: 100%;
			}
			.contact-us-title {
				color: ${Colors.ThemeIndigo};
				line-height: 22px;
				margin-bottom: 7px;
			}
			.single-info {
				margin-top: 16px;
				line-height: 20px;
				.single-info__key {
					font-weight: 700;
					color: ${Colors.TextPrimary};
				}
				.single-info__value {
					font-weight: ${TextFonts["p1.2"].fontWeight};
					color: ${Colors.TextTertiary};
					margin: 0 6px;
				}
			}
			.availability-info {
				display: flex;
				margin-top: 8px;
				& div:last-child {
					margin-left: 20px;
				}
				@media ${Devices.mobile} {
					margin-top: 0;
				}
			}
		}
		.newsletter {
			max-width: 465px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 48px;
			@media ${Devices.tablet} {
				max-width: 100%;
			}
			@media ${Devices.mobile} {
				margin-left: 0;
				margin-top: 48px;
			}
			& .subscribe {
				margin: 0;
				padding: 12px 40px;
			}
			& .description {
				color: ${Colors.TextTertiary};
				line-height: 24px;
				${TextFonts["p1.3"]};
				margin-top: 16px;
				margin-bottom: 22px;
				@media ${Devices.mobile} {
					margin-top: 15px;
					margin-bottom: 12px;
				}
			}
			.email-input-container {
				width: 100%;
				display: flex;
				align-items: center;
				.subscribe-input-box {
					position: relative;
					width: 100%;
					& > span {
						position: absolute;
						top: 50%;
						right: -16px;
						transform: translateY(-50%);
						width: 144px;
						height: 44px;
						@media ${Devices.tablet} {
							width: 112px;
						}
						@media ${Devices.mobile} {
							width: 96px;
						}
					}
				}
			}
			.MuiOutlinedInput-input {
				padding: 15px 0 13px 16px;
				background-color: ${Colors.BackgroundPrimary};
				${TextFonts["p1.3"]};
			}
			.follow-container__subscribe-comp {
				display: none;
				@media ${Devices.tablet} {
					display: flex;
					align-items: center;
					margin-top: 33px;
				}
				@media ${Devices.mobile} {
					margin-top: 49px;
				}
			}
		}
	}
`;

export const LogoLinkStyled = styled.a`
	display: inline-block;
	width: 24px;
	height: 24px;
	background-image: url(${(props) => props?.logos?.simple});
	&:hover{
		background-image: url(${(props) => props?.logos?.hovered});
	}
	&:not(:first-child) {
		margin-left: 8px;
	}
`;
