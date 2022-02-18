import React from 'react';
import FloatingWhatsAppButton from 'react-floating-whatsapp';

const FloatingWhatsApp: React.FC = (props) => {
  return (
    <FloatingWhatsAppButton
      phoneNumber={'+18053573732'}
      accountName={'Bobjolly'}
      avatar='/images/06.png'
    />
  );
};
export default FloatingWhatsApp;
