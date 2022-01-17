import { StarsContainer } from "./starsContainer";
import { ListingsCardItemStyled } from "./styles";

export const ListingsCardItem = ({ rate, comment, author }) => {
    return (
        <ListingsCardItemStyled>
            <StarsContainer rate={rate}/>
            <p className="comment-cont">{comment}</p>
            <p className="author-cont text-primary">{author}</p>
        </ListingsCardItemStyled>
    );
};
