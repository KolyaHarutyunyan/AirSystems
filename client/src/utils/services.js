import { Images } from "@eachbase/assets";

const {
   homepageHeatingWeb,
   homepageHeatingTablet,
   homepageHeatingMobile,

   homepageVentilationWeb,
   homepageVentilationTablet,
   homepageVentilationMobile,

   homepageAirConditWeb,
   homepageAirConditTablet,
   homepageAirConditMobile,

   homepageRefrigerationWeb,
   homepageRefrigerationTablet,
   homepageRefrigerationMobile,

   serviceHeatingWeb,
   serviceVentilationWeb,
   serviceAirConditWeb,
   serviceRefrigerationWeb,

} = Images;

export const Services = [
   {
      imageWeb: homepageHeatingWeb,
      imageTablet: homepageHeatingTablet,
      imageMobile: homepageHeatingMobile,

      serviceImage: serviceHeatingWeb,
      bgColor: "#F2682F19",

      icon: Images.ServicesIcons.HeatingIcon,
      title: "Heating",
      list: ["General", "Distribution - Water/Steam Air", "Dangers"],
   },
   {
      imageWeb: homepageVentilationWeb,
      imageTablet: homepageVentilationTablet,
      imageMobile: homepageVentilationMobile,

      serviceImage: serviceVentilationWeb,
      bgColor: "#5799EB1A",

      icon: Images.ServicesIcons.VentilationIcon,
      title: "Ventilation",
      list: ["Mechanical", "Forced", "Passive"],
   },
   {
      imageWeb: homepageAirConditWeb,
      imageTablet: homepageAirConditTablet,
      imageMobile: homepageAirConditMobile,

      serviceImage: serviceAirConditWeb,
      bgColor: "#9F74FB1A",

      icon: Images.ServicesIcons.AirConditioningIcon,
      title: "Air Conditioning",
      list: [
         "Refrigeration Cycle",
         "Free Cooling",
         "Packaged Split System",
         "Dehumidification",
         "Humidification",
      ],
   },
   {
      imageWeb: homepageRefrigerationWeb,
      imageTablet: homepageRefrigerationTablet,
      imageMobile: homepageRefrigerationMobile,

      serviceImage: serviceRefrigerationWeb,
      bgColor: "#01BAEF1A",
      
      icon: Images.ServicesIcons.RefrigerationIcon,
      title: "Refrigeration",
      list: ["Refrigeration Cycle", "Free Cooling", "Mechanical", "Passive"],
   },
];
