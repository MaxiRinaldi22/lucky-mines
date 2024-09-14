import { useState } from "react";

export function Menu({ functions, states }) {
  const { handleRestart, handleStartClick } = functions;
  const { selectedValue, setSelectedValue, isPlaing, lose } = states;
  const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  console.log(selectedValue);

  return (
    <section className="container-menu">
      <section className="bet-amount-container">
        <p>Amount</p>
        <div className="input-container">
          <input type="number" className="bet-input" />

          <div className="action-buttons">
            <button className="half-btn">½</button>

            <button className="double-btn">2x</button>

            <button className="max-btn">Max</button>
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
              className="selection"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
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
      <button
        className="start-btn"
        onClick={() => (isPlaing ? handleRestart() : handleStartClick())}
        style={{
          backgroundColor: isPlaing
            ? lose
              ? "#00E701"
              : "#60AF60"
            : "#00E701",
        }}
      >
        {isPlaing ? (lose ? "Play Again" : "Cash Out") : "Play"}
      </button>
    </section>
  );
}
