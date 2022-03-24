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
      subtitle: "The comfort you need during those winter months",
      text: "When temperatures drop it is important to have a properly installed, safe and dependable heating system. We advise our customers to call us and receive a free evaluation prior to the winter months. Even if your heating system is working, we may be able to recommend a newer, more efficient system that may save you money.",
      list: [
         "Floor Furnace/Wall Heater",
         "Gravity Heater",
         "Conventional Furnace",
         "Variable Speed Furnace",
         "Modulating Furnace",
         "Deluxe Furnace",
         "Forced Air Heating/Residential Split Systems",
      ],
   },
   {
      imageWeb: homepageVentilationWeb,
      imageTablet: homepageVentilationTablet,
      imageMobile: homepageVentilationMobile,

      serviceImage: serviceVentilationWeb,
      bgColor: "#5799EB1A",

      icon: Images.ServicesIcons.VentilationIcon,
      title: "Ventilation",
      subtitle: "Proper air flow to reduce strain on your HVAC system",
      text: "With any HVAC system proper ventilation design and installation is key to getting the maximum performance and efficiency out of your system. Having good ventilation can also affect air quality in your home. With over 35 years of experience we know the importance of ventilation installation and design. Our team will provide the most cost effective and efficient ventilation system for your home or business.",
      list: [
         "HVAC Rectangular Ducts",
         "CAV HVAC Systems",
         "Air Exhaust Ventilation",
      ],
   },
   {
      imageWeb: homepageAirConditWeb,
      imageTablet: homepageAirConditTablet,
      imageMobile: homepageAirConditMobile,

      serviceImage: serviceAirConditWeb,
      bgColor: "#9F74FB1A",

      icon: Images.ServicesIcons.AirConditioningIcon,
      title: "Air Conditioning",
      subtitle: "Cooling your family and pets down during summer heat waves",
      text: "Living in Southern California, residents experience sunshine for most of the year. Having the A/C running all day long can put a strain on your HVAC system if proper maintenance or installation has not been performed. We often come across units that are working at minimal efficiency causing higher energy bills and less cooling. Proper maintenance and installation from a professional company is a great way to assure those scorching summer months will be cool for your family and pets.",
      list: [
         "Ductless Mini-splits",
         "Heat Pumps",
         "Zoning Systems",
         "Programmable Thermostats",
         "Rooftop Package Unit",
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
      subtitle: "Keeping food and drinks cool around the clock",
      text: "We understand how important refrigeration is for businesses, especially in Southern California. Small part failures can cause refrigeration units to fail and ruin food products. Prior to summer months approaching we advise our customers to call us about preventative maintenance on refrigeration units which may be malfunctioning or close to failing.",
      list: [
         "Retail Stores",
         "Pharmacies",
         "Restaurants & Chains",
         "Warehouse",
         "Green Houses",
         "Controls",
      ],
   },
];
