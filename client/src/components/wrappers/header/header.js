import { HeaderStyled, HeroOverlayStyled } from "./styles";

export const Header = ({ img, titleCont, height, content }) => {
    return (
        <HeaderStyled img={img} height={height}>
            <HeroOverlayStyled>
                <div className="upper-header">
                    <h6 className="background-primary">SoCal Air Systems</h6>
                </div>
                {titleCont}
                <p className="lower-header">
                    {content}
                </p>
            </HeroOverlayStyled>
        </HeaderStyled>
    );
};
