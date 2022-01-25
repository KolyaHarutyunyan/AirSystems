import { useState } from "react";
import { StarsContainer } from "./starsContainer";
import { ListingsCardItemStyled } from "./styles";

export const ListingsCardItem = ({ id, rate, comment, author }) => {

   const isReadMoreNeeded = comment.length > 81;
   const [commentOpen, setCommentOpen] = useState(false);

   const handleReadMoreClick = () => {
      setCommentOpen((prev) => !prev)
   } 

	return (
		<ListingsCardItemStyled open={commentOpen} needed={isReadMoreNeeded}>
			<StarsContainer rate={rate} />
			<p id={`opinion-${id}`} className="comment-cont text-tertiary">
				<span className="comment">{comment}</span>
			</p>
			{
				isReadMoreNeeded && !commentOpen && (
					<div onClick={handleReadMoreClick} className="read-more theme-light-blue">Read More</div>
				)
			}

			<p className="author-cont text-primary">{author}</p>
		</ListingsCardItemStyled>
	);
};
