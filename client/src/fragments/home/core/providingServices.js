import { Services, useAnimation } from "@eachbase/utils";
import { TitleDivider } from "@eachbase/components";
import { ProvidingServiceCard } from "./providingServiceCard";
import { ProvidingServicesStyled } from "./styles";

export const ProvidingServices = () => {
   const animation = useAnimation(1500);
   const animationStyle = animation ? "fadeInUp" : "";

   return (
      <ProvidingServicesStyled>
         <div className="providing-services-layer-container">
            <div className="providing-services-layer">
               <h2 className="providing-services-title-cont">
                  <div className="providing-services-title">
                     <span className="theme-green">Services</span>
                     <span className="theme-indigo"> we provide</span>
                  </div>
                  <TitleDivider lineAnimation={animation} />
               </h2>
               <p className="providing-services-descr text-secondary">
                  Explore the range of services we have to offer. If there are
                  services not mentioned below please give us a call for a
                  custom quote.
               </p>
               <div className="providing-services-cards-cont">
                  {Services.map((service, index) => (
                     <ProvidingServiceCard
                        service={service}
                        key={service.title}
                        cardClassName={animationStyle}
                        index={index}
                     />
                  ))}
               </div>
            </div>
         </div>
      </ProvidingServicesStyled>
   );
};
