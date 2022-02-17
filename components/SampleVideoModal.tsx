import React from 'react';
import Modal from './shared/Modal';

interface SampleVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleVideoModal: React.FC<SampleVideoModalProps> = (props) => {
  return (
    <Modal
      body={
        <iframe
          loading='lazy'
          className='youtube-video'
          width='100%'
          height='440'
          src='https://www.youtube.com/embed/FyB6oO4t2Yw?rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen={true}
        />
      }
      modalContentProps={{
        py: '4',
        bgImage: 'url("/images/gift-pattern.jpg")',
      }}
      header='Sample Video'
      {...props}
    />
  );
};
export default SampleVideoModal;
