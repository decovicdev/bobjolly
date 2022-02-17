import React from 'react';
import FloatingWhatsAppButton from 'react-floating-whatsapp';

const FloatingWhatsApp: React.FC = (props) => {
  return (
    <FloatingWhatsAppButton
      phoneNumber={'+8615679136891'}
      accountName={'Bobjolly'}
      avatar='/images/gift-img.png'
    />
  );
};
export default FloatingWhatsApp;
