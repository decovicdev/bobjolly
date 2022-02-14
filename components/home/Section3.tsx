import React from 'react';
import dynamic from 'next/dynamic';

import styles from '../../styles/Home.module.scss';

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

interface Section3Props {}

const Section3: React.FC<Section3Props> = (props) => {
  return (
    <div className={styles.centerSection}>
      <div className={styles.container}>
        <div className={styles.testomonialBox}>
          {OwlCarousel && (
            <OwlCarousel items={3} autoWidth={true} loop autoplay>
              <div className={styles.tetsiItem} style={{ width: 660 }}>
                <p>
                  Amazing! Funniest video! Great service, the product has
                  arrived faster than expected and was exactly what I wanted it
                  to be. Highly recommended!
                </p>
                <div className={styles.testName}>
                  <span>Gil Chirurg,</span> Israel
                </div>
              </div>
              <div className={styles.tetsiItem} style={{ width: 660 }}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>
                  Awful! Absolutely Awful! What a ghastly sence of humor. Can't
                  believe I paid 12 bucks for this s#$%
                </p>
                <div className={styles.testName}>
                  <span>Captain America,</span> Spain
                </div>
              </div>
              <div className={styles.tetsiItem} style={{ width: 660 }}>
                <p>
                  Delivered it, same day and it was exactly what I wanted, and
                  even threw in a second version, for free! Will be working with
                  him in the future again.
                </p>
                <div className={styles.testName}>
                  <span>Erin Wade,</span> United States
                </div>
              </div>
            </OwlCarousel>
          )}
        </div>
      </div>
    </div>
  );
};
export default Section3;
