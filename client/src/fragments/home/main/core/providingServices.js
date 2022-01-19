import { Services } from "@eachbase/utils";
import { ProvidingServiceCard } from "./providingServiceCard";
import { TitleDivider } from "./titleDivider";
import { ProvidingServicesStyled } from "./styles";

export const ProvidingServices = () => {
   return (
      <ProvidingServicesStyled>
         <div className="providing-services-layer">
            <h2 className="providing-services-title-cont">
               <div className="providing-services-title">
                  <span className="theme-green">Services</span> <span className="theme-indigo">we provide</span>
               </div>
               <TitleDivider className="title-divider" />
            </h2>
            <p className="providing-services-descr text-secondary">
               Explore the range of services we have to offer. If there are services not mentioned below please give us
               a call for a custom quote.
            </p>
            <div className="providing-services-cards-cont">
               {Services.map((service) => (
                  <ProvidingServiceCard service={service} key={service.title} />
               ))}
            </div>
         </div>
      </ProvidingServicesStyled>
   );
};
