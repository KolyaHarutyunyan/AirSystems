import { ButtonStyled } from "./styles";

export const Button = (props) => {
    const { onClick, disabled, color, bgColor, icon } = props;
    return <ButtonStyled {...props} />;
};
