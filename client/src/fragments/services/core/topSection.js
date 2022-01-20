import { TitleDivider } from "@eachbase/components";
import { TopSectionStyled } from "./styles";

export const TopSection = () => {
   return (
      <TopSectionStyled>
         <h2 className="title-cont">
            <div className="title">
               <span className="theme-green">Services</span>{" "}
               <span className="theme-indigo">we provide</span>
            </div>
            <TitleDivider />
         </h2>
         <p className="descr text-secondary">
            We take pride in having a multidisciplinary team of technicians and experts which allows
            us to provide a range of services to our customers. Everything you would need from small
            repairs to large commercial projects.
         </p>
      </TopSectionStyled>
   );
};
