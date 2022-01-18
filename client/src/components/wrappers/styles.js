import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const UserDropWrapperStyled = styled.div`
  width: 100%;
  .label {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 700;
    color: ${Colors.TextTertiary};
    display: flex;
    &.required::before {
      content: "*";
      color: ${Colors.ThemeRed};
    }
  }
  .error {
    font-size: 12px;
    font-weight: 500;
    color: ${Colors.ThemeRed};
    padding: 4px 16px 0;
  }
`;
