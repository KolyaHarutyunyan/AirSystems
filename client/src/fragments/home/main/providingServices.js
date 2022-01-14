import styled from "styled-components";
import { Colors, Services, TextFonts } from "@eachbase/utils";
import { ProvidingServiceCard } from "./core/providingServiceCard";
import { TitleDivider } from "./core/titleDivider";

const ProvidingServicesStyled = styled.section`
    position: relative;
    width: 100%;
    height: 751px;
    padding: 0;

    .theme-green {
        color: ${Colors.ThemeGreen};
    }
    .theme-indigo {
        color: ${Colors.ThemeIndigo};
    }
    .text-secondary {
        color: ${Colors.TextSecondary};
    }

    .providing-services-layer {
        position: relative;
        background-color: ${Colors.BackgroundSecondary};
        width: 100%;
        height: 460px;
        padding: 80px;
    }
    .providing-services-title-cont {
        line-height: 49px;
        display: flex;
        align-items: center;
    }
    .providing-services-title{
        margin-right: 16px;
    }
    .providing-services-descr {
        line-height: 24px;
        font-weight: ${TextFonts["p1.2"].fontWeight};
        max-width: 465px;
        margin-top: 16px;
    }
    .providing-services-cards-cont {
        position: absolute;
        top: 255px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 0 40px;
    }
`;

export const ProvidingServices = () => {
    return (
        <ProvidingServicesStyled>
            <div className="providing-services-layer">
                <h2 className="providing-services-title-cont">
                    <div className="providing-services-title">
                        <span className="theme-green">Services</span>{" "}
                        <span className="theme-indigo">we provide</span>
                    </div>
                    <TitleDivider />
                </h2>
                <p className="providing-services-descr text-secondary">
                    Explore the range of services we have to offer. If there are
                    services not mentioned below please give us a call for a
                    custom quote.
                </p>
            </div>
            <div className="providing-services-cards-cont">
                {Services.map((service) => (
                    <ProvidingServiceCard
                        service={service}
                        key={service.title}
                    ></ProvidingServiceCard>
                ))}
            </div>
        </ProvidingServicesStyled>
    );
};
