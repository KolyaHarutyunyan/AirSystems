import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const QuickMessageStyled = styled.section`
  width: 100%;
  padding: 80px 163px;
  background-color: ${Colors.BackgroundSecondary};
  margin-bottom: 128px;
  .quick-message-container {
    width: 100%;
    .quick-message-box {
      width: 100%;
      margin-bottom: 32px;
      .quick-message-title {
        color: ${Colors.ThemeIndigo};
        margin-bottom: 16px;
        & em {
          color: ${Colors.ThemeGreen};
        }
      }
      .quick-message-description {
        font-size: 16px;
        font-weight: 500;
        color: ${Colors.TextSecondary};
        line-height: 24px;
      }
    }
    .quick-message-inputs-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const EstimateRequestStyled = styled.section`
  width: 100%;
  padding: 0 163px;
  .estimate-request-container {
    width: 100%;
    .estimate-request-box {
      width: 100%;
      margin-bottom: 32px;
      .estimate-request-title {
        color: ${Colors.ThemeIndigo};
        margin-bottom: 16px;
        & em {
          color: ${Colors.ThemeGreen};
        }
      }
      .estimate-request-description {
        max-width: 465px;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        color: ${Colors.TextSecondary};
        line-height: 24px;
      }
    }
    .estimate-request-inputs-box {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
