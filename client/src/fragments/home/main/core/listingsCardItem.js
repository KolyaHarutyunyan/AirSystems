import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";

const ListingsCardItemStyled = styled.div`
    background-color: ${Colors.BackgroundSecondary};
    width: 302px;
    height: 188px;
    padding: 24px 24px 22px;

    .text-primary {
        color: ${Colors.TextPrimary};
    }
    .text-tertiary {
        color: ${Colors.TextTertiary};
    }
    .comment-cont {
        ${TextFonts["p1.3"]}
    }
    .author-cont {
        line-height: 20px;
        ${TextFonts["p1.2"]}
    }
`;

export const ListingsCardItem = ({ rate, comment, author }) => {
    return (
        <ListingsCardItemStyled>
            <div className="rate-cont">{rate}</div>
            <p className="comment-cont">{comment}</p>
            <p className="author-cont text-primary">{author}</p>
        </ListingsCardItemStyled>
    );
};
