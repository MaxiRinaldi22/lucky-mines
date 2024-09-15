import { GameContext } from "../context/GameContext";
import {  useContext, useState } from "react";
import logo from "../assets/images/logo.png"
import "./Header.css";
import { Info } from "./Icons";

function Header() {
  const [showInfo, setShowInfo] = useState(false);
  const { balance, setBalance } = useContext(GameContext);

  return (
    <header>
      <section className="container-header">
        <img src={logo} alt="Logo" width='90px'/>
        <div className="wallet-container">
          <div className="wallet"> <p> ${balance}</p> <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcon" /></div>
          <button className="wallet-btn" onClick={() => setBalance((prevBalance) => prevBalance + 100)}>Wallet</button>
          <div className="wallet-ifo" onMouseLeave={() => setShowInfo(false)} onMouseEnter={() => setShowInfo(true)}>
            <Info />
          </div>
          <div className="info">
            {showInfo && <p>+100</p>}
          </div>
        </div>
          
        
      </section>
    </header>
  );
}

export default Header;
