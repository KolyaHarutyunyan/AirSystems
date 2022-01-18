import { LogoButtonStyled } from "./styles";

export const LogoButton = (props) => {
    const { logo, onClick, disabled, color, bgColor, icon } = props;
    return (
        <>
            <LogoButtonStyled {...props} />
        </>
    );
};
