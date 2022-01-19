import { TitleDivider } from "@eachbase/components";
import { useWidth, AppSizes, WisetackFeatures } from "@eachbase/utils";
import { WisetackFinancingStyled } from "./styles";

const mobile = parseInt(AppSizes.mobile);

const WisetackFinancingEnd = () => (
   <h4 className="wisetack-financing-end">
      <span className="theme-indigo">FLEXIBLE FINANCING THROUGH</span>{" "}
      <span className="theme-light-blue">WISETACK</span>
   </h4>
);

export const WisetackFinancing = () => {
   const width = useWidth();
   return (
      <WisetackFinancingStyled>
         <h2 className="wisetack-financing-title-cont">
            <div className="wisetack-financing-title">
               <span className="theme-green">We offer</span>{" "}
               <span className="theme-indigo">financing</span>
            </div>
            <TitleDivider />
         </h2>
         <p className="wisetack-financing-descr text-secondary">
            Pay in installments for your purchases. It takes just a minute to see your options and
            checking eligibility won’t impact your credit score. Learn more about financing through
            Wisetack.
         </p>
         <div className="wisetack-financing-img-cont">
            <div className="wisetack-financing-img" />
            {width <= mobile && <WisetackFinancingEnd />}
            <ul className="wisetack-financing-features-list">
               {WisetackFeatures.map((text) => (
                  <li key={text} className="wisetack-financing-features-list-item text-secondary">
                     {text}
                  </li>
               ))}
            </ul>
         </div>
         {width > mobile && <WisetackFinancingEnd />}
      </WisetackFinancingStyled>
   );
};
