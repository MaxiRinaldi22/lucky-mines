import { BalanceContext } from "../context/BalanceContext";
import {  useContext } from "react";
import logo from "../assets/images/logo.png"
import "./Header.css";

function Header() {
  const { balance, setBalance } = useContext(BalanceContext);

  return (
    <header>
      <section className="container-header">
        <img src={logo} alt="Logo" width='90px'/>
        <div className="wallet-container">
          <div className="wallet"> <p> ${balance}</p> <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcon" /></div>
          <button className="wallet-btn" onClick={() => setBalance((prevBalance) => prevBalance + 100)}>Wallet</button>
        </div>
        
      </section>
    </header>
  );
}

export default Header;
