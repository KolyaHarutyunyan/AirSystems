import { Images } from "@eachbase/assets";
import { TitleDivider } from "@eachbase/components";
import {
   useWidth,
   AppSizes,
   WisetackFeatures,
   getCardClassName,
   useAnimation,
} from "@eachbase/utils";
import { WisetackFinancingStyled } from "./styles";

const mobile = parseInt(AppSizes.mobile);
const tablet = parseInt(AppSizes.tablet);

const WisetackFinancingEnd = () => (
   <h4 className="wisetack-financing-end">
      <span className="theme-indigo">FLEXIBLE FINANCING THROUGH</span>
      <span className="theme-light-blue">WISETACK</span>
   </h4>
);

export const WisetackFinancing = () => {
   const width = useWidth();
   const scrollHeight =
      width > mobile && width <= tablet ? 3300 : width <= mobile ? 4300 : 2450;

   const animation = useAnimation(scrollHeight);
   const animationStyle = animation ? "fadeInUp" : "";

   return (
      <WisetackFinancingStyled>
         <h2 className="wisetack-financing-title-cont">
            <div className="wisetack-financing-title">
               <span className="theme-indigo">We offer</span>
               <span className="theme-green"> financing</span>
            </div>
            <TitleDivider lineAnimation={animation} />
         </h2>
         <p className="wisetack-financing-descr text-secondary">
            Pay in installments for your purchases. It takes just a minute to
            see your options and checking eligibility won’t impact your credit
            score. Learn more about financing through Wisetack.
         </p>
         <div className="wisetack-financing-img-cont">
            <div className="wisetack-financing-img" />
            {width <= mobile && <WisetackFinancingEnd />}
            <ul className="wisetack-financing-features-list">
               {WisetackFeatures.map((text, index) => (
                  <li
                     key={text}
                     className={`wisetack-financing-features-list-item text-secondary ${getCardClassName(
                        index
                     )} ${animationStyle}`}
                  >
                     <img src={Images.Icons.Checkmark} alt="" />
                     <span>{text}</span>
                  </li>
               ))}
            </ul>
         </div>
         {width > mobile && <WisetackFinancingEnd />}
      </WisetackFinancingStyled>
   );
};
