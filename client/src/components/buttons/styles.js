import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const SendButtonStyled = styled.button`
  border: none;
  outline: none;
  background-color: ${Colors.ThemeGreen};
  border-radius: 4px;
  padding: 10px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.BackgroundPrimary};
`
export const ButtonStyled = styled.span`
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

export const LogoButtonStyled = styled.span`
    cursor: pointer;
    user-select: none;
    margin: 0 20px;
    height: 40px;
    padding: 11px 16px 9px;
    border-radius: 4px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
`;
