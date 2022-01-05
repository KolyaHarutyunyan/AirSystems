import {homeFragments} from "./core";
import {Images} from "../../assets";

export const HomeFragment =({}) =>{
    const classes = homeFragments()
    return(
        <div>
            <img src={Images.someImage} alt={'img'}/>
        </div>
    )
}
