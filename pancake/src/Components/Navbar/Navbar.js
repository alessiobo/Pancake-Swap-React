import { Link, useNavigate} from "react-router-dom";
import Button from "../UI/Buttons/Button";
import "./navbar.css";
import { contextDarkMode } from "../UI/DarkMode/contextDarkMode";
import { useContext } from "react";


//Immagini ed icone
import logo_color_black from "./Icons/logo_black.svg"
import logo_color_white from "./Icons/logo_white.svg"
import three_dots_purple from "./Icons/three_dots_purple.svg"
import logo_circle_green from "./Icons/logo_circle_green.svg"
import world_purple from "./Icons/world_purple.svg"
import gear_purple from "./Icons/gear_purple.svg"
import bnb_golden from "./Icons/bnb_golden.svg"
import arrow_down_purple from "./Icons/arrow_down_purple.svg"
import ethereum_icon from "./Icons/ethereum.png"
import aptos_icon from "./Icons/aptos_icon_white.svg"

function Navbar() {
  const navigate = useNavigate();
  const darkMode = useContext(contextDarkMode)
  return (
    <div className={darkMode ? "navbar-black" : "navbar"}>
      <div class="navbar-container-logo-menu">
        <div class="navbar-logo-home">
          <Link to={"/"}>
            <img
              class="navbar-img-logo"
              src={darkMode ? logo_color_white : logo_color_black}
              alt="logo"
            />
          </Link>
        </div>
        <div class="navbar-menus">
          <div class="navbar-dropdowns">
            <button class="navbar-btn-trade">Trade</button>
            <div class="navbar-dropdown-content">
              <a href="swap">Swap</a>
              <a href="limit">Limit</a>
              <a href="liquidity">Liquidity</a>
              <a href="perpetual">Perpetual</a>
              <a href="bridge">Bridge</a>
            </div>
          </div>
          <div class="navbar-dropdowns">
            <button class="navbar-btn-earn">Earn</button>
            <div class="navbar-dropdown-content">
              <a href="farms">Farms</a>
              <a href="pools">Pools</a>
            </div>
          </div>
          <div class="navbar-dropdowns">
            <button class="navbar-btn-win">Win</button>
            <div class="navbar-dropdown-content">
              <a href="trading-competition">Trading Competiotion</a>
              <a href="prediction">Prediction (BETA)</a>
              <a href="lottery">Lottery</a>
              <a href="pottery">Pottery (BETA)</a>
            </div>
          </div>
          <div class="navbar-dropdowns">
            <button class="navbar-btn-NFT" onClick={() => navigate("/nfts")}>
              NFT
            </button>
            <div class="navbar-dropdown-content">
              <Link to={"/nfts"}>Overview</Link>
              <a href="collections">Collections</a>
              <a href="activity">Activity</a>
            </div>
          </div>
          <div class="navbar-dropdowns">
            <button className={darkMode ? "navbar-btn-3-points-menu" : "navbar-btn-3-points-menu-dark"}>
              <img
                class="navbar-three-points-menu"
                src={three_dots_purple}
                alt="..."
              />
            </button>
            <div class="navbar-dropdown-content">
              <a href="info">Info</a>
              <a href="ifo">IFO</a>
              <a href="voting">Voting</a>
              <a href="leaderboard">Leaderboard</a>
              <a href="blog">Blog</a>
              <a href="docs">Docs</a>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-container-details-from-navbar">
        <div class="bunny-navbar-price">
          <a class="navbar-icon-bunny-navbar-price" href="">
            <img
              class="navbar-img-bunny-logo"
              src={logo_circle_green}
              alt="logo circle green"
            />
            <span class="navbar-price">$4.011</span>
          </a>
        </div>
        <div class="navbar-language">
          <button class="navbar-btn-change-language">
            <img
              class="navbar-img-lng"
              src={world_purple}
              alt="world_purple"
            />
          </button>
        </div>
        <div class="navbar-option">
          <button class="navbar-btn-option">
            <img
              class="navbar-img-btn-option"
              src={gear_purple}
              alt="gear purple"
            />
          </button>
        </div>
        <div class="navbar-dropdown-crypto">
          <button class="navbar-change-crypto">
            <img
              class="navbar-img-change-crypto"
              src={bnb_golden}
              alt="bnb_golden"
            />
            BNB Smart Chain
            <img
              class="navbar-img-down-arrow"
              src={arrow_down_purple}
              alt="arrow"
            />
          </button>
          <div class="navbar-dropdown-content">
            <p class="navbar-select-network-text">Select a Network</p>
            <a href="">
              <img
                class="navbar-img-change-crypto"
                src={bnb_golden}
                alt="bnb_golden"
              />
              BNB Smart Chain
            </a>
            <a href="">
              <img
                class="navbar-img"
                src={ethereum_icon}
                alt="ethereum"
              />
              Ethereum
            </a>
            <a href="">
              <img
                class="navbar-img"
                src={aptos_icon}
                alt="aptos_icon"
              />
              Aptos
            </a>
          </div>
        </div>
        <div class="navbar-btn-connect-wallet">
          <Button type="btn-small">Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
