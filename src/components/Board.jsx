import { useState } from "react";
// import { StarLose, StarWin } from "./Icons";

export function Board({ arrayResult, config }) {
  const { setCardColors, cardColors, isPlaing, setLose,  lose } = config;

  const [clickedCards, setClickedCards] = useState(
    Array(arrayResult.length).fill(false)
  );

  const handleClick = (index) => {
    // Color part
    if (!arrayResult[index]) {
      setCardColors(
        arrayResult.map((status, i) =>
          status ? (clickedCards[i] ? "#DDB345" : "#5F5239") : "red"
        )
      );
    } else {
      setCardColors((prevColors) =>
        prevColors.map((status, i) => (index === i ? "#DDB345" : status))
      );

      setClickedCards((prevClick) =>
        prevClick.map((clicked, i) => (i === index ? true : clicked))
      );
    }

    // Lose part
    if (arrayResult[index] === false) {
      setLose(true);
    }
  };

  return (
    <section className="container-board">
      {arrayResult.map((status, i) => (
        <button
          key={i}
          className="card"
          onClick={() => {
            handleClick(i);
          }}
          disabled={!isPlaing || lose}
          style={{
            backgroundColor: cardColors[i],
            cursor: !isPlaing || lose ? "not-allowed" : "pointer",
          }}
        >
          {/* {clickedCards[i] &&
            (status ? (
              <StarWin />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
                  fill="#ffffff"
                />
              </svg>
            ))} */}
        </button>
      ))}
    </section>
  );
}
