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
`;
