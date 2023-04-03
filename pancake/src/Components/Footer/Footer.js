import Button from "../UI/Buttons/Button";
import "./footer.css";

//Footer images
import bunnyToken from "./footer-images/cake-token.png";

//Social Icon
import i_discord from "./footer-images/socialIcons/social-icon-discord.png";
import i_github from "./footer-images/socialIcons/social-icon-github.png";
import i_instagram from "./footer-images/socialIcons/social-icon-instagram.svg";
import i_media from "./footer-images/socialIcons/social-icon-media.png";
import i_reddit from "./footer-images/socialIcons/social-icon-reddit.png";
import i_youtube from "./footer-images/socialIcons/social-icon-youtube.png";
import i_telegram from "./footer-images/socialIcons/social-icon-telegram.png";
import i_twitter from "./footer-images/socialIcons/social-icon-twitter.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-links-container">
            <div className="footer-container-lists-social">
              <div className="footer-container-lists">
                <div className="footer-list">
                  <ul className="footer-ul">
                    <h4 className="footer-h4">ABOUT</h4>
                    <a className="footer-contact-a" href="">
                      <li className="footer-li" style={{ color: "#ffb237" }}>
                        Contact
                      </li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Brand</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Blog</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Community</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Litepaper</li>
                    </a>
                  </ul>
                </div>
                <div className="footer-list">
                  <ul className="footer-ul">
                    <h4 className="footer-h4">HELP</h4>
                    <a className="footer-a" href="">
                      <li className="footer-li">Customer Support</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Troubleshooting</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Guides</li>
                    </a>
                  </ul>
                </div>
                <div style={{ width: "184px" }} className="footer-list">
                  <ul className="footer-ul">
                    <h4 className="footer-h4">DEVELOPERS</h4>
                    <a className="footer-a" href="">
                      <li className="footer-li">Github</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Documentation</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Blue Bounty</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Audits</li>
                    </a>
                    <a className="footer-a" href="">
                      <li className="footer-li">Careers</li>
                    </a>
                  </ul>
                </div>
                <div className="footer-logo">
                  <img
                    className="footer-img-logo"
                    src="../DesignSystem/images/Logo/color-white.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="footer-container-social">
                <div className="footer-social">
                  <a className="footer-social-a" href="twitter">
                    <img className="footer-img-social" src={i_twitter} alt="" />
                  </a>
                  <a className="footer-social-a" href="telegram">
                    <img
                      className="footer-img-social"
                      src={i_telegram}
                      alt=""
                    />
                  </a>
                  <a className="footer-social-a" href="reddit">
                    <img className="footer-img-social" src={i_reddit} alt="" />
                  </a>
                  <a className="footer-social-a" href="instagram">
                    <img
                      className="footer-img-social footer-instagram-fix"
                      src={i_instagram}
                      alt=""
                    />
                  </a>
                  <a className="footer-social-a" href="github">
                    <img className="footer-img-social" src={i_github} alt="" />
                  </a>
                  <a className="footer-social-a" href="discord">
                    <img className="footer-img-social" src={i_discord} alt="" />
                  </a>
                  <a className="footer-social-a" href="medio">
                    <img className="footer-img-social" src={i_media} alt="" />
                  </a>
                  <a className="footer-social-a" href="youtube">
                    <img className="footer-img-social" src={i_youtube} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-container-hr">
              <div className="footer-hr">
                <hr />
              </div>
            </div>
          </div>
          <div className="footer-change-mode-buy-cake">
            <div className="footer-btn-mode-btn-lng">
              <div className="checkbox-btn-container">
                <input
                  className="checkbox-btn-input"
                  type="checkbox"
                  id="switch-button1"
                />
                <label
                  className="checkbox-btn-label footer-label-color"
                  for="switch-button1"
                >
                  <img
                    className="checkbox-btn-icon checkbox-btn-icon-sun"
                    src="./Css-global/images/sun.svg"
                    alt=""
                  />

                  <img
                    className="checkbox-btn-icon checkbox-btn-icon-moon"
                    src="./Css-global/images/moon.svg"
                    alt=""
                  />
                </label>
              </div>
              <div className="footer-btn-lng">
                <button
                  style={{ color: "white" }}
                  className="footer-btn-language"
                >
                  <img
                    className="footer-img-lng"
                    src="../DesignSystem/images/Icons/others-icons/icons8-geografia-48 1.png"
                    alt=""
                  />
                  EN
                </button>
              </div>
            </div>
            <div className="footer-price-buy-cake">
              <div className="footer-icon-bunny-price">
                <a className="footer-icon-price" href="#">
                  <img
                    className="footer-img-bunny-logo"
                    src={bunnyToken}
                    alt="logo"
                  />
                  <span className="footer-price">
                    <b>$4.011</b>
                  </span>
                </a>
              </div>
              <div className="footer-buycake">
                <Button
                  addStyle={{ height: "32px", gap: "5px" }}
                  type={"btn"}
                  img={"arrR"}
                >
                  Buy CAKE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
