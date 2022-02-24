import React from "react";

interface HeroIframeProps {}

const HeroIframe: React.FC<HeroIframeProps> = (props) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/1Wwu1nD4uzs?rel=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={false}
    />
  );
};
export default HeroIframe;
