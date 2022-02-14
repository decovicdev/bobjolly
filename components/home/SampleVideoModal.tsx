import React from 'react';
import { Modal } from 'react-bootstrap';

interface SampleVideoModalProps {
  show: boolean;
  onHide: () => void;
}

const SampleVideoModal: React.FC<SampleVideoModalProps> = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <div style={{ backgroundImage: `url('../images/gift-pattern.jpg')` }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
          }}
        >
          <h3 style={{ color: 'white' }}>Sample Video</h3>
        </div>

        <div
          style={{
            width: 700,
            height: 550,
          }}
        >
          <div
            style={{
              width: '90%',
              height: '100%',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              marginTop: '15%',
            }}
          >
            <iframe
              className='youtube-video'
              width='100%'
              height='440'
              src='https://www.youtube.com/embed/FyB6oO4t2Yw?rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SampleVideoModal;
