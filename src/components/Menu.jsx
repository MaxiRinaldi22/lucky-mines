import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export function Menu({ functions, gameActions, styleActions }) {
  const { handleRestart, handleStartClick, handleCashout } = functions;
  const { isPlaing, lose, win, disabledBtn, comulativeMulti, totalBet } =
    gameActions;
  const { btnColor, btnText } = styleActions;
  const { setInputBet, inputBet, balance, numberOfMines, setNumberOfMines } =
    useContext(GameContext);

  const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const handleBetInmput = (e) => {
    setInputBet(e.target.value);
  };

  const handleDiv = () => {
    if (inputBet <= 1) return;
    const newBet = inputBet / 2;
    setInputBet(newBet < 1 ? 1 : newBet);
  };

  const handleMax = () => {
    if (inputBet >= balance) return;
    setInputBet(balance);
  };

  const handleMulti = () => {
    if (inputBet >= balance) return;
    const newBet = inputBet * 2;
    setInputBet(newBet > balance ? balance : newBet);
  };

  return (
    <section className="container-menu">
      <section className="bet-amount-container">
        <p>Amount</p>
        <div className="input-container">
          <input
            disabled={isPlaing || win || lose}
            type="number"
            className="bet-input"
            value={inputBet}
            onChange={handleBetInmput}
          />

          <div className="action-buttons">
            <button
              disabled={isPlaing || win || lose}
              className="half-btn"
              onClick={handleDiv}
            >
              ½
            </button>
            <button
              disabled={isPlaing || win || lose}
              className="double-btn"
              onClick={handleMulti}
            >
              2x
            </button>
            <button
              disabled={isPlaing || win || lose}
              className="max-btn"
              onClick={handleMax}
            >
              Max
            </button>
          </div>
        </div>
      </section>

      <section className="containet-input">
        <p>Mines</p>
        <div className="container">
          <form
            className="selection-container"
            onSubmit={(e) => e.preventDefault()}
          >
            <select
              disabled={isPlaing || win || lose}
              className="selection"
              value={numberOfMines}
              onChange={(e) => setNumberOfMines(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </form>
        </div>
      </section>
      {isPlaing && (
        <section className="info-rewards">
          <div className="info-rewards-text">
            <p>Total multi ({comulativeMulti.toFixed(2)}x)</p>
            <p>{(totalBet - inputBet).toFixed(10)} BTC</p>
          </div>
          <div className="info-rewards-totalBet">
            <p>{(totalBet - inputBet).toFixed(2)}</p>
            <img
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
              width={24}
              height={24}
            />
          </div>
        </section>
      )}

      <button
        className="start-btn"
        disabled={(!isPlaing && inputBet > balance) || disabledBtn}
        onClick={() => {
          if (win) {
            handleRestart();
          } else if (lose) {
            handleRestart();
          } else if (isPlaing) {
            handleCashout();
          } else {
            handleStartClick();
          }
        }}
        style={{
          backgroundColor: btnColor,
        }}
      >
        {btnText}
      </button>
    </section>
  );
}
