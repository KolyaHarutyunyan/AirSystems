import { useWidth, AppSizes } from "@eachbase/utils";
import { ChessImgSection } from "./chessImgSection";
import { BigCardStyled } from "./styles";

export const BigCard = ({ service, reverse }) => {
   const width = useWidth();
   const { title, subtitle, text, list, serviceImage, bgColor, icon } = service;
   const mobile = parseInt(AppSizes.mobile);
   return (
      <BigCardStyled bg={bgColor} reverse={reverse}>
         <div className="info-section">
            <h2 className={`Heating card-caption-cont theme-indigo`}>
               <span className="card-caption">{title}</span>
               <img className="card-icon" src={icon} alt={`Heating`} />
            </h2>
            <div className="descr-cont">
               <h6 className="descr-title text-primary">{subtitle}</h6>
               <p className="descr-p text-tertiary">{text}</p>
            </div>
            {width <= mobile && (
               <ChessImgSection
                  bg={bgColor}
                  img={serviceImage}
                  reverse={reverse}
               />
            )}
            <ul className="card-list">
               {list.map((text) => (
                  <li key={text} className="card-list-item text-tertiary">
                     {text}
                  </li>
               ))}
            </ul>
         </div>
         {width > mobile && (
            <ChessImgSection
               bg={bgColor}
               img={serviceImage}
               reverse={reverse}
            />
         )}
      </BigCardStyled>
   );
};
