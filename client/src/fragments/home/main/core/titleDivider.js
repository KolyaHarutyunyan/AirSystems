import { HorizontalDivider } from "@eachbase/components/dividers";
import { Colors } from "@eachbase/utils";

export const TitleDivider = (props) => {
    return <HorizontalDivider length="256px" bb={`2px solid ${Colors.ThemeGreen}`} {...props} />;
};
