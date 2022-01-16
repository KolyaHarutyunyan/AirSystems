import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const BestExperienceStyled = styled.section`
width: 66%;
min-width: 954px;
margin-top: 128px;
.theme-indigo {
    color: ${Colors.ThemeIndigo};
}
& .best-exp-title {
    width: 361px;
    line-height: 50px;
    margin-bottom: 32px;
}
.benefits-contaner {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
`;

export const FreeQuotesStyled = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    padding: 0 80px;
    margin-top: 128px;
    display: flex;
    justify-content: space-between;

    .background-primary{
        background-color: ${Colors.BackgroundPrimary};
    }
    .theme-green {
        color: ${Colors.ThemeGreen};
    }
    .text-primary {
        color: ${Colors.TextPrimary};
    }
    .text-tertiary {
        color: ${Colors.TextTertiary};
    }

    .free-quotes__img-cont {
        background-image: url(${Images.homepageFreequotesWeb});
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 49%;
        height: 100%;
    }
    .free-quotes__title-cont {
    }
    & .free-quotes__title {
        margin-top: 16%;
        max-width: 465px;
        line-height: 42px;
    }

    .free-quotes__absolute-cont {
        line-height: 24px;
        position: absolute;
        top: 60%;
        left: 30%;
        width: 465px;
        padding: 32px 32px 30px;
    }
    .free-quotes__absolute-cont__title {
        font-weight: bold;
    }
    .free-quotes__absolute-cont__descr {
        ${TextFonts["p1.3"]};
        padding-top: 16px;
    }
`;