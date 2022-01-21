import { Header, Main } from "@eachbase/components";
import {
	BestExperience,
	FreeQuotes,
	CustomersOpinion,
	ProvidingServices,
	WisetackFinancing,
	Partners,
} from "./core";
import { Images } from "@eachbase/assets";
import { Info } from "@eachbase/utils";

export const HomeFragment = ({}) => {
	return (
		<>
			<Header
				img={Images.homepageHeroWeb}
				titleCont={
					<h1 className="main-title">
						<span className="theme-green">HVAC Experts</span>{" "}
						<span className="bg-primary">Serving the Los Angeles Community</span>
					</h1>
				}
				height={"600px"}
				content={
					<div className="contact-info">
						<div className="info-logo-container">
							<img src={Images.Icons.Info} alt="info" />
						</div>
						{Info.slice(0, 3).map(({ keyName, href, value}) => (
							<div key={keyName} className={"single-info " + "single-info__" + keyName}>
								<span className="single-info__key">{keyName}:</span>{" "}
								<a href={href} className="single-info__value">{value}</a>
							</div>
						))}
					</div>
				}
			/>

			<Main
				content={
					<>
						<BestExperience />
						<FreeQuotes />
						<ProvidingServices />
						<WisetackFinancing />
						<CustomersOpinion />
						<Partners />
					</>
				}
			/>
		</>
	);
};
