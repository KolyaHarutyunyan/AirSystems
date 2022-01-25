import styled from "styled-components";
import { Colors, Devices, TextFonts } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

let { fontWeight } = TextFonts["p1.2"];

export const HeaderStyled = styled.header`
	width: 100%;
	background-image: url(${({ img }) => img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: ${({ bgPosition }) => bgPosition};
	.header-backdrop {
		position: relative;
		max-width: 100%;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		background: transparent linear-gradient(90deg, #000000b3 0%, #00000033 100%) 0% 0% no-repeat
			padding-box;
		& a {
			user-select: none;
			color: ${Colors.BackgroundPrimary}
		}
		.background-primary {
			color: ${Colors.BackgroundPrimary};
		}
		.main-title {
			width: 628px;
			margin: 115px 0 63px;
			@media ${Devices.tablet} {
				width: 411px;
				margin: 73px 0 36px;
			}
			@media ${Devices.mobile} {
				width: 289px;
				margin: 50px 0 36px;
			}
			& > .title-cont {
				line-height: 73px;
				display: flex;
				align-items: center;
				@media ${Devices.tablet} {
					font-size: 60px;
				}
				@media ${Devices.mobile} {
					font-size: 28px;
					line-height: 34px;
				}
				& > span {
					padding-left: 16px;
					@media ${Devices.mobile} {
						padding-left: 8px;
					}
				}
			}
		}
		.main-title-abs {
         margin: 0;
			position: absolute;
			top: 50%;
         transform: translateY(-50%);
		}
		& .theme-green {
			color: ${Colors.ThemeGreen};
		}
		& .bg-primary {
			color: ${Colors.BackgroundPrimary};
		}
		.contact-info {
			width: 608px;
			padding: 18px 24px;
			background-color: ${Colors.BackgroundPrimary};
			color: ${Colors.TextTertiary};
			display: flex;
			align-items: center;
			@media ${Devices.mobile} {
				display: none;
			}
			.single-info {
				line-height: 20px;
				&:not(:first-child) {
					margin: 0 24px;
				}
				.single-info__key {
					font-weight: bold;
					color: ${Colors.TextPrimary};
				}
				.single-info__value {
					font-weight: ${fontWeight};
					color: ${Colors.TextTertiary};
				}
			}
		}
	}
`;

export const HeaderContentStyled = styled.section`
	position: relative;
	max-width: 1440px;
	width: 100%;
	height: 100%;
	padding: 43px 80px 0;
	min-height: ${({ minHeight }) => minHeight};
	@media ${Devices.tablet} {
		padding: 38px 32px 0;
	}
	@media ${Devices.mobile} {
		padding: 38px 16px 0;
	}
	.lower-header {
		width: 100%;

		& .contact-info__mobile-view {
			display: none;
			@media ${Devices.mobile} {
				display: flex;
				align-items: center;
				width: 100%;
				padding: 15px 19px;
				background-color: ${Colors.BackgroundPrimary};
				& > span,
				& > a {
					font-size: 16px;
					font-weight: 600;
					line-height: 20px;
					color: ${Colors.TextTertiary};
					margin-right: 26px;
					display: inline-flex;
					align-items: center;
					&::before {
						content: "";
						width: 18px;
						height: 19px;
						background-position: center;
						background-repeat: no-repeat;
						background-size: contain;
						margin-right: 11px;
					}
					&:first-child::before {
						background-image: url(${Images.Icons.Phone});
						width: 24px;
						height: 24px;
					}
					&:last-child::before {
						background-image: url(${Images.Icons.Calendar});
						width: 24px;
						height: 24px;
					}
				}
			}
		}
	}
`;
