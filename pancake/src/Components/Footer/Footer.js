import "./footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="footer-container">
          <div class="footer-links-container">
            <div class="footer-container-lists-social">
              <div class="footer-container-lists">
                <div class="footer-list">
                  <ul class="footer-ul">
                    <h4 class="footer-h4">ABOUT</h4>
                    <a class="footer-contact-a" href="">
                      <li class="footer-li">Contact</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Brand</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Blog</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Community</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Litepaper</li>
                    </a>
                  </ul>
                </div>
                <div class="footer-list">
                  <ul class="footer-ul">
                    <h4 class="footer-h4">HELP</h4>
                    <a class="footer-a" href="">
                      <li class="footer-li">Customer Support</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Troubleshooting</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Guides</li>
                    </a>
                  </ul>
                </div>
                <div class="footer-list">
                  <ul class="footer-ul">
                    <h4 class="footer-h4">DEVELOPERS</h4>
                    <a class="footer-a" href="">
                      <li class="footer-li">Github</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Documentation</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Blue Bounty</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Audits</li>
                    </a>
                    <a class="footer-a" href="">
                      <li class="footer-li">Careers</li>
                    </a>
                  </ul>
                </div>
                <div class="footer-logo">
                  <img
                    class="footer-img-logo"
                    src="../DesignSystem/images/Logo/color-white.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="footer-container-social">
                <div class="footer-social">
                  <a class="footer-social-a" href="twitter">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/social-icons/icons8-twitter-48 1.png"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="telegram">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/social-icons/icons8-telegram-48 1.png"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="reddit">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/social-icons/icons8-reddit-48 1.png"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="instagram">
                    <img
                      class="footer-img-social footer-instagram-fix"
                      src="../DesignSystem/images/Icons/social-icons/icons8-instagram-50 1.svg"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="github">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/social-icons/icons8-github-48 (2) 1.png"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="discord">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/social-icons/icons8-discordia-48 1.png"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="medio">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/others-icons/icons8-logo-medio-48 1.png"
                      alt=""
                    />
                  </a>
                  <a class="footer-social-a" href="youtube">
                    <img
                      class="footer-img-social"
                      src="../DesignSystem/images/Icons/social-icons/icons8-riproduci-youtube-48 1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="footer-container-hr">
              <div class="footer-hr">
                <hr />
              </div>
            </div>
          </div>
          <div class="footer-change-mode-buy-cake">
            <div class="footer-btn-mode-btn-lng">
              {/* <!-- <div class="footer-btn-mode">
                  <input
                    class="footer-input-mode"
                    type="checkbox"
                    id="switch-button"
                  />
                  <label class="footer-label" for="switch-button">
                    <img
                      class="footer-sun"
                      src="./Components/footer/sun-solid.svg"
                    />
                    <img
                      class="footer-moon"
                      src="./Components/footer/moon-solid.svg"
                      alt=""
                    />
                  </label>
                </div> --> */}
              <div class="checkbox-btn-container">
                <input
                  class="checkbox-btn-input"
                  type="checkbox"
                  id="switch-button1"
                />
                <label
                  class="checkbox-btn-label footer-label-color"
                  for="switch-button1"
                >
                  <img
                    class="checkbox-btn-icon checkbox-btn-icon-sun"
                    src="./Css-global/images/sun.svg"
                  />

                  <img
                    class="checkbox-btn-icon checkbox-btn-icon-moon"
                    src="./Css-global/images/moon.svg"
                  />
                </label>
              </div>
              <div class="footer-btn-lng">
                <button class="footer-btn-language">
                  <img
                    class="footer-img-lng"
                    src="../DesignSystem/images/Icons/others-icons/icons8-geografia-48 1.png"
                    alt=""
                  />
                  EN
                </button>
              </div>
            </div>
            <div class="footer-price-buy-cake">
              <div class="footer-icon-bunny-price">
                <a class="footer-icon-price" href="">
                  <img
                    class="footer-img-bunny-logo"
                    src="../DesignSystem/images/Logo/cake-token.png"
                    alt="logo"
                  />
                  <span class="footer-price">
                    <b>$4.011</b>
                  </span>
                </a>
              </div>
              <div class="footer-buycake">
                <button class="btn">
                  Buy CAKE
                  <img
                    class="footer-right-arrow"
                    src="./Components/footer/right-arrow.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
