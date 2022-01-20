import { useWidth, AppSizes, Devices } from "@eachbase/utils";
import { ProvidingServiceCardStyled } from "./styles";

export const ProvidingServiceCard = ({ service }) => {
    const width = useWidth();
    const { imageWeb, imageTablet, imageMobile, title, list } = service;
    return (
        <ProvidingServiceCardStyled>
            <img
                className="service-card-img"
                src={
                    width <= AppSizes.mobile
                        ? imageMobile
                        : width <= Devices.tablet
                        ? imageTablet
                        : imageWeb
                }
                alt={title}
            />
            <h4 className="service-card-title">{title}</h4>
            <ul className="service-card-list">
                {list.map((text) => (
                    <li
                        key={text}
                        className="service-card-list-item text-tertiary"
                    >
                        {text}
                    </li>
                ))}
            </ul>
        </ProvidingServiceCardStyled>
    );
};
