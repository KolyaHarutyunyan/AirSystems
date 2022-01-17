import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";

const ProvidingServiceCardStyled = styled.div`
    top: 300px;
    background-color: ${Colors.BackgroundPrimary};
    width: 302px;
    padding: 24px 24px 22px;
    display: flex;
    flex-direction: column;

    .text-tertiary{
        color:${Colors.TextTertiary}
    }

    .service-card-img {
        width: 100%;
    }
    .service-card-title {
        line-height: 34px;
        margin: 24px 0 16px;
    }
    .service-card-list {
        list-style-position: inside;
        padding-inline-start: 1px;
    }
    .service-card-list-item {
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
    .service-card-list-item:not(:first-child) {
        margin-top: 8px;
    }
`;

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
