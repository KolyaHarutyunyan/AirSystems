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
} = Images;

export const Services = [
    {
        imageWeb: homepageHeatingWeb,
        imageTablet: homepageHeatingTablet,
        imageMobile: homepageHeatingMobile,
        title: "Heating",
        list: ["General", "Distribution - Water/Steam Air", "Dangers"],
    },
    {
        imageWeb: homepageVentilationWeb,
        imageTablet: homepageVentilationTablet,
        imageMobile: homepageVentilationMobile,
        title: "Ventilation",
        list: ["Mechanical", "Forced", "Passive"],
    },
    {
        imageWeb: homepageAirConditWeb,
        imageTablet: homepageAirConditTablet,
        imageMobile: homepageAirConditMobile,
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
        title: "Refrigeration",
        list: ["Refrigeration Cycle", "Free Cooling", "Mechanical", "Passive"],
    },
];
