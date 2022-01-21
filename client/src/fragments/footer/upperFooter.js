import { Divider, TextField } from "@mui/material";
import { Button } from "@eachbase/components";
import { Colors, Info } from "@eachbase/utils";
import { Images } from "@eachbase/assets";
import { UpperFooterStyled, LogoLinkStyled } from "./styles";

export const UpperFooter = () => {
	return (
		<UpperFooterStyled>
			<div className="socal-media">
				<div className="socal-la">
					<h6 className="theme-green">SoCal Air Systems</h6>
					<span className="quality">{"LA's best pricing & quality"}</span>
				</div>
				<h6 className="follow-container__socal-comp indigo-heading">
					Follow us:
					<div className="logos-container">
						{Images.FollowLogos.map(({ name, href, logos }) => (
							<LogoLinkStyled
								target="_blank"
								href={href}
								key={name}
								alt={name}
								className={name}
								logos={logos}
							/>
						))}
					</div>
				</h6>
			</div>
			<div className="contact-subscribe-box">
				<div className="contact-us">
					<h6 className="contact-us-title">Contact us</h6>
					<div className="contact-info">
						{Info.map(
							({ keyName, href, value }) =>
								href && (
									<div
										key={keyName}
										className={"single-info " + "single-info__" + keyName}
									>
										<span className="single-info__key">{keyName}:</span>{" "}
										<a href={href} className="single-info__value">{value}</a>
									</div>
								)
						)}
					</div>
					<Divider
						style={{
							paddingTop: "24px",
							color: "#6D82974D",
						}}
					/>
					<div className="availability-info">
						{Info.map(
							({ keyName, href, value }) =>
								!href && (
									<div
										key={keyName}
										className={"single-info " + "single-info__" + keyName}
									>
										<span className="single-info__key">{keyName}:</span>{" "}
										<span className="single-info__value">{value}</span>
									</div>
								)
						)}
					</div>
				</div>
				<div className="newsletter">
					<h6 className="indigo-heading">Subscribe to our newsletter</h6>
					<p className="description">
						Get the latest insights on HVAC maintenance and deals. We promise not to spam your
						inbox!
					</p>
					<div className="email-input-container">
						<div className="subscribe-input-box">
							<TextField
								fullWidth
								name="user-email"
								placeholder="Enter your email address"
							/>
							<Button
								className="subscribe-button"
								bgColor={Colors.ThemeGreen}
								color={Colors.BackgroundPrimary}
								onClick={() => alert("ok")}
							>
								Subscribe
							</Button>
						</div>
					</div>
					<h6 className="follow-container__subscribe-comp indigo-heading">
						Follow us:
						<div className="logos-container">
							{Images.FollowLogos.map(({ name, href, logos }) => (
								<LogoLinkStyled
									target="_blank"
									href={href}
									key={name}
									alt={name}
									className={name}
									logos={logos}
								/>
							))}
						</div>
					</h6>
				</div>
			</div>
		</UpperFooterStyled>
	);
};
