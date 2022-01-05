import {homeStyles} from "./styles";
import {HomeFragment} from "@eachbase/fragments";

export const Home = () => {
    const classes = homeStyles()

    return (
        <div>
            <p className={classes.textStyle}>
                Home
            </p>
            <HomeFragment/>
        </div>
    )
}
