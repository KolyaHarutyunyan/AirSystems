import { HorizontalDivider } from "@eachbase/components/dividers";
import { Colors } from "@eachbase/utils";

export const TitleDivider = (props) => {
   return (
      <HorizontalDivider
         onlyWeb
         length={props.lineAnimation ? "256px" : "0px"}
         bb={`2px solid ${Colors.ThemeGreen}`}
         {...props}
      />
   );
};
