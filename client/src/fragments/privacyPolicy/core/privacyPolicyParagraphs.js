import { Colors } from "@eachbase/utils";

const listStyle = { marginLeft: "12px" };
const linkStyle = { color: Colors.ThemeGreen };

export const privacyPolicyParagraphs = [
   <p>SoCal Air Systems Group, Inc. Privacy Policy</p>,

   <p>
      This Privacy Policy describes how your personal information is collected,
      used, and shared when you visit or make a purchase from
      socalairsystems.com (the “Site”).
   </p>,

   <p>PERSONAL INFORMATION WE COLLECT</p>,

   <p>
      When you visit the Site, we automatically collect certain information
      about your device, including information about your web browser, IP
      address, time zone, and some of the cookies that are installed on your
      device. Additionally, as you browse the Site, we collect information about
      the individual web pages or products that you view, what websites or
      search terms referred you to the Site, and information about how you
      interact with the Site. We refer to this automatically-collected
      information as “Device Information.”
   </p>,

   <>
      <p>We collect Device Information using the following technologies:</p>
      <ul>
         <li style={listStyle}>
            - “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
         </li>
         <li style={listStyle}>
            - “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
         </li>
      </ul>
   </>,

   <p>
      Additionally when you make a purchase or attempt to make a purchase
      through the Site, we collect certain information from you, including your
      name, billing address, shipping address, payment information (including
      credit card numbers) email address, and phone number. We refer to this
      information as “Order Information.”
   </p>,

   <p>
      When we talk about “Personal Information” in this Privacy Policy, we are
      talking both about Device Information and Order Information.
   </p>,

   <p>HOW DO WE USE YOUR PERSONAL INFORMATION?</p>,

   <p>
      We use the Order Information that we collect generally to fulfill any
      orders placed through the Site (including processing your payment
      information, arranging for shipping, and providing you with invoices
      and/or order confirmations). Additionally, we use this Order Information
      to: Communicate with you; Screen our orders for potential risk or fraud;
      and When in line with the preferences you have shared with us, provide you
      with information or advertising relating to our products or services. We
      use the Device Information that we collect to help us screen for potential
      risk and fraud (in particular, your IP address), and more generally to
      improve and optimize our Site (for example, by generating analytics about
      how our customers browse and interact with the Site, and to assess the
      success of our marketing and advertising campaigns).
   </p>,

   <p>
      We share your Personal Information with third parties to help us use your
      Personal Information, as described above. For example, we use Shopify to
      power our online store--you can read more about how Shopify uses your
      Personal Information here:
      <a
         href="https://www.shopify.com/legal/privacy"
         target="_blank"
         style={linkStyle}
      >
         {" "}
         https://www.shopify.com/legal/privacy.{" "}
      </a>
      We also use Google Analytics to help us understand how our customers use
      the Site-- you can read more about how Google uses your Personal
      Information here:
      <a
         href="https://www.google.com/intl/en/policies/privacy/"
         target="_blank"
         style={linkStyle}
      >
         {" "}
         https://www.google.com/intl/en/policies/privacy/.{" "}
      </a>
      You can also opt-out of Google Analytics here:
      <a
         href="https://tools.google.com/dlpage/gaoptout"
         target="_blank"
         style={linkStyle}
      >
         {" "}
         https://tools.google.com/dlpage/gaoptout.{" "}
      </a>
   </p>,

   <p>
      Finally, we may also share your Personal Information to comply with
      applicable laws and regulations, to respond to a subpoena, search warrant
      or other lawful request for information we receive, or to otherwise
      protect our rights.
   </p>,

   <p>
      As described above, we use your Personal Information to provide you with
      targeted advertisements or marketing communications we believe may be of
      interest to you. For more information about how targeted advertising
      works, you can visit the Network Advertising Initiative’s (“NAI”)
      educational page at
      <a
         href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
         target="_blank"
         style={linkStyle}
      >
         {" "}
         http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.{" "}
      </a>
   </p>,

   <>
      <p>You can opt out of targeted advertising by:</p>
      <ul>
         [[
         <li style={listStyle}>
            FACEBOOK -
            <a
               href="https://www.facebook.com/settings/?tab=ads"
               target="_blank"
               style={linkStyle}
            >
               {" "}
               https://www.facebook.com/settings/?tab=ads{" "}
            </a>
         </li>
         <li style={listStyle}>
            GOOGLE -
            <a
               href="https://www.google.com/settings/ads/anonymous"
               target="_blank"
               style={linkStyle}
            >
               {" "}
               https://www.google.com/settings/ads/anonymous{" "}
            </a>
         </li>
         <li style={listStyle}>
            BING -
            <a
               href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
               target="_blank"
               style={linkStyle}
            >
               {" "}
               https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads{" "}
            </a>
         </li>
         ]]
      </ul>
      <span>
         Additionally, you can opt out of some of these services by visiting the
         Digital Advertising Alliance’s opt-out portal at:
      </span>
      <a href="http://optout.aboutads.info/" target="_blank" style={linkStyle}>
         {" "}
         http://optout.aboutads.info/.{" "}
      </a>
   </>,

   <>
      <p>DO NOT TRACK</p>
      <span>
         {" "}
         Please note that we do not alter our Site’s data collection and use
         practices when we see a Do Not Track signal from your browser.{" "}
      </span>
   </>,

   <>
      <p>DATA RETENTION</p>
      <span>
         When you place an order through the Site, we will maintain your Order
         Information for our records unless and until you ask us to delete this
         information. The Site is not intended for individuals under the age of
         21.
      </span>
   </>,

   <>
      <p>CHANGES</p>
      <span>
         We may update this privacy policy from time to time in order to
         reflect, for example, changes to our practices or for other
         operational, legal or regulatory reasons.
      </span>
   </>,

   <>
      <p>CONTACT US</p>
      <span>
         For more information about our privacy practices, if you have
         questions, or if you would like to make a complaint, please contact us
         by e-mail at info@socalairsystems.com or by mail using the details
         provided below: 3107 Pico Blvd., Suite B, Santa Monica, CA, 90405,
         United States
      </span>
   </>,
];
