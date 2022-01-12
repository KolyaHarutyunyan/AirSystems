import styled from "styled-components";

const LogoButtonStyled = styled.span`
    cursor: pointer;
    user-select: none;
    margin: 0 20px;
    height: 40px;
    padding: 11px 16px 9px;
    border-radius: 4px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
`;

export const LogoButton = (props) => {
    const { logo, onClick, disabled, color, bgColor, icon } = props;
    return (
        <>
            <LogoButtonStyled {...props} />
        </>
    );
};
