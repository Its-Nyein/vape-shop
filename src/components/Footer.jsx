import React from "react";
import "./footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section sb-section">
        <div className="footer-section-links">
          <div className="footer-section-links-div">
            <h4>Language</h4>
            <div>
              <input
                type="radio"
                id="unicode"
                name="drone"
                value="unicode"
                checked
              />
              <label for="unicode">Myanmar(Unicode)</label>
            </div>

            <div>
              <input type="radio" id="zawgyi" name="drone" value="zawgyi" />
              <label for="zawgyi">Myanmar(Zawgyi)</label>
            </div>

            <div>
              <input type="radio" id="english" name="drone" value="english" />
              <label for="english">English</label>
            </div>
          </div>
          <div className="footer-section-links-div">
            <h4>Contact Us</h4>
            <p>
              <IoLocationOutline />
              Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
              Township, Yangon
            </p>
            <p></p>
            <p>
              <span>
                <GiRotaryPhone />
              </span>
              +959458489458
            </p>
          </div>
          <div className="footer-section-links-div">
            <h4>Download Our App</h4>
            <div className="footer-img">
              <img
                src="https://static.thenounproject.com/png/59262-200.png"
                alt=""
              />
            </div>
          </div>
          <div className="footer-section-links-div">
            <h4>Follow Us On</h4>
            <div className="footer-socialMedia">
              <p>
                <img src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" />
              </p>
              <p>
                <img src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png" />
              </p>
              <p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png" />
              </p>
              <p>
                <img src="https://cdn-icons-png.flaticon.com/512/4103/4103009.png" />
              </p>
              <p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png" />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-section-below">
          <div className="footer-section-copyright">
            &copy; Copyright{new Date().getFullYear()} by D Co.ltd.All rights
            reserved.
          </div>
          <div className="footer-section-service">
            <h4>Customer Service</h4>
            <p>
              <span>
                <MdOutlinePrivacyTip />
              </span>
              Terms & Privacy Policy
            </p>
            <p>
              <span>
                <BsArrowCounterclockwise />
              </span>
              Return Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
