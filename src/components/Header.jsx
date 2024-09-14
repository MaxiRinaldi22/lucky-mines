import "./Header.css";
import logo from "../assets/img/logo.png"
function Header() {
  return (
    <header>
      <section className="container-header">
        <img src={logo} alt="Logo" width='90px'/>
        <div className="wallet-container">
          <div className="wallet"> <p> $500</p> <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcon" /></div>
          <button className="wallet-btn">Wallet</button>
        </div>
        
      </section>
    </header>
  );
}

export default Header;
