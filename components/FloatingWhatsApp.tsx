import React from 'react';
import FloatingWhatsAppButton from 'react-floating-whatsapp';

const FloatingWhatsApp: React.FC = (props) => {
  return (
    <FloatingWhatsAppButton
      phoneNumber={'+18053573732'}
      accountName={'Bobjolly'}
      avatar="/images/what's-profile.png"
    />
  );
};
export default FloatingWhatsApp;
