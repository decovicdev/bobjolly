import React from "react";

import styles from "../../styles/Home.module.scss";
import StripeContainer from "../StripeContainer";

interface Section4Props {
  isMobile: boolean;
}

const Section4: React.FC<Section4Props> = (props) => {
  const { isMobile } = props;
  return (
    <div className={styles.giftSection} id="booknow">
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h1>Funny Birthday Music Video</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>
            It's just $11.95. Delivery within 24 hours!
            <br />
            Place your order now!
          </h2>
        </div>
        <div className={styles.giftFormBox + " " + styles.birthdayForm}>
          <div
            className={styles.giftFormImg}
            style={isMobile ? { width: "100%" } : { width: "70%" }}
          >
            <div
              className={"app"}
              style={isMobile ? { width: "100%" } : { width: "70%" }}
            >
              <StripeContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
