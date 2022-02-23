import React from "react";
import WhatsAppFloatingButton from "./whatsapp-floating-button";
// import FloatingWhatsAppButton from 'react-floating-whatsapp';

const FloatingWhatsApp: React.FC = (props) => {
  return (
    // <FloatingWhatsAppButton
    //   phoneNumber={'+18053573732'}
    //   accountName={'Bobjolly'}
    //   avatar="/images/what's-profile.png"
    // />
    <WhatsAppFloatingButton
      phoneNumber={"+18053573732"}
      name={"Bobjolly"}
      avatar="/images/what's-profile.png"
    />
  );
};
export default FloatingWhatsApp;
