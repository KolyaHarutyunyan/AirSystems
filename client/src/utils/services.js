import { Images } from "@eachbase/assets";

const { homepageHeatingWeb, homepageVentilationWeb, homepageAirConditWeb, homepageRefrigerationWeb } = Images;

export const Services = [
    {
        image: homepageHeatingWeb,
        title: 'Heating',
        list: [ 'General', 'Distribution - Water/Steam Air', 'Dangers' ]
    },
    {
        image: homepageVentilationWeb,
        title: 'Ventilation',
        list: [ 'Mechanical', 'Forced', 'Passive' ]
    },
    {
        image: homepageAirConditWeb,
        title: 'Air Conditioning',
        list: [ 'Refrigeration Cycle', 'Free Cooling', 'Packaged Split System', 'Dehumidification', 'Humidification' ]
    },
    {
        image: homepageRefrigerationWeb,
        title: 'Refrigeration',
        list: [ 'Refrigeration Cycle', 'Free Cooling', 'Mechanical', 'Passive' ]
    },
]
