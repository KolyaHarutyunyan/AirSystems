import { ProvidingServiceCardStyled } from "./styles";

export const ProvidingServiceCard = ({ service }) => {
    const { image, title, list } = service;
    return (
        <ProvidingServiceCardStyled>
            <img className="service-card-img" src={image} alt={title} />
            <h4 className="service-card-title">{title}</h4>
            <ul className="service-card-list">
                {list.map((text) => (
                    <li key={text} className="service-card-list-item text-tertiary">
                        {text}
                    </li>
                ))}
            </ul>
        </ProvidingServiceCardStyled>
    );
};
