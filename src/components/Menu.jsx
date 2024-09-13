import { useState } from "react";

export function Menu({
  selectedValue,
  setSelectedValue,
  isPlaing,
  handleRestart,
  handleStartClick,
  lose,
}) {
  const [inputValue, setInputValue] = useState(1);
  const [selected, setSelected] = useState(1);
  const arrayOptions = [1, 3, 5, 10, "Custom"];

  console.log("Valor " + selectedValue);
  console.log("Label " + selected);
  console.log("Input " + inputValue);

  const handleSelect = (value) => {
    setSelected(value);
    value === "Custom" ? setSelectedValue(inputValue) : setSelectedValue(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // setSelectedValue(e.target.value);
  };

  return (
    <section className="container-menu">
      <section className="containet-input">
        <p>Number of Mines</p>
        <div className="container">
          <form
            className="selection-container"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="container-buttons">
              {arrayOptions.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(option)}
                  className={selected === option ? "active" : ""}
                  style={{ cursor: isPlaing ? "not-allowed" : "pointer" }}
                  disabled={isPlaing}
                >
                  {option}
                </button>
              ))}
            </div>
            <div>
              {selected === "Custom" && (
                <input
                  onChange={handleChange}
                  value={inputValue}
                  type="number"
                  className="custom-input"
                  min={1}
                  max={25}
                />
              )}
            </div>
          </form>
        </div>
      </section>
      <button
        className="start-btn"
        onClick={() => (isPlaing ? handleRestart() : handleStartClick())}
      >
        {isPlaing ? (lose ? "Play Again" : "Cash Out") : "Start Game"}
      </button>
    </section>
  );
}
