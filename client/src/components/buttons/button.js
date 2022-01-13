import styled from "styled-components";

const ButtonStyled = styled.span`
    cursor: pointer;
    user-select: none;
    margin: 0 20px;
    height: 40px;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = (props) => {
    const { onClick, disabled, color, bgColor, icon } = props;
    return <ButtonStyled {...props} />;
};
