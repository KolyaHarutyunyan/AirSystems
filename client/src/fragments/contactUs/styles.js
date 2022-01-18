import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const ContactUsFragmentStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  .contact-us-container {
    max-width: 1440px;
    width: 100%;
    padding: 128px 80px;
    .connect-box {
        max-width: 524px;
        width: 100%;
        margin-bottom: 32px;
        .connect-title {
            color: ${Colors.ThemeIndigo};
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            & em {
                color: ${Colors.ThemeGreen};
                margin-left: 12px;
            }
            &:after {
                content: '',
                width: 256px;
                height: 2px;
                background-color: ${Colors.ThemeGreen};
                margin-left: 16px;
            } 
        }
        .connect-description {
            font-size: 16px;
            font-weight: 500;
            color: ${Colors.TextSecondary};
            line-height: 24px;
        }
    }
    .connect-map {
        max-width: 1280px;
        width: 100%;
        height: 500px;
        background-color: ${Colors.BackgroundSecondary};
        margin-bottom: 128px;
    }
  }
`;
