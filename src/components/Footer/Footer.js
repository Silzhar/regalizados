import React from "react";
import "./style.scss";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__cell">
          <ul className="Footer__list">
            <p className="Footer__title">Founder</p>
            <li>ADFI MEDIA</li>
          </ul>
        </div>
        <div className="Footer__cell">
          <ul className="Footer__list">
            <p className="Footer__title" >About :</p>
            <li>Twiter</li>
            <li>Instagam</li>
            <li>Learn as entertainment</li>
          </ul>
        </div>
        <div className="Footer__cell">
          <ul className="Footer__list">
            <p className="Footer__title">About :</p>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Legal Notice</li>
          </ul>
        </div>
      </div>
      <p className="Footer__last">© Adfi Media 2021</p>
    </div>
  );
}
export default Footer;
