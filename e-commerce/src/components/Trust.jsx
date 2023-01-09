import React from "react";
import awardsData from "../data/awards";
import crown from "./images/crown.png";
import box from "./images/box-tick.png";
import shield from "./images/shield-security.png"

function TrustSection() {

  return (
    <>
      <div className="trust-section-container">
        <div className="trust-main-contents">
          <div className="trust-card">
            <div className="trust-image">
              <img src={box} />
            </div>
            <div className="trust-texts-container">
              <div className="trust-text-1">
                <h2>Free delivery</h2>
              </div>
              <div className="trust-text-2">
                <p>on order above $50,00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-main-contents">
          <div className="trust-card">
            <div className="trust-image">
              <img src={crown} />
            </div>
            <div className="trust-texts-container">
              <div className="trust-text-1">
                <h2>Best quality</h2>
              </div>
              <div className="trust-text-2">
                <p>best quality in low price</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-main-contents">
          <div className="trust-card">
            <div className="trust-image">
              <img src={shield} />
            </div>
            <div className="trust-texts-container">
              <div className="trust-text-1">
                <h2>1 year warranty</h2>
              </div>
              <div className="trust-text-2">
                <p>Available warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrustSection;
