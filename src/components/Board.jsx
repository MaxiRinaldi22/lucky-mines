import { Bomb, StarLose, StarWin } from "./Icons";

export function Board({ arrayResult, functions, card }) {
  const { isPlaing, lose, setLose, clickedCards, setClickedCards } = functions;
  const { cardIcons, setCardIcons } = card;

  const handleClick = (index) => {
    // Color part
    if (!arrayResult[index]) {
      setCardIcons((prevIcons) =>
        prevIcons.map((icon, i) => (index === i ? <Bomb /> : icon))
      );
    } else {
      setClickedCards((prevClick) =>
        prevClick.map((clicked, i) => (i === index ? true : clicked))
      );

      setCardIcons((prevIcons) =>
        prevIcons.map((icon, i) => (index === i ? <StarWin /> : icon))
      );
    }

    // Lose part
    if (!arrayResult[index]) {
      setLose(true);
      showResult();
    }
  };

  const showResult = () => {
    setCardIcons((prevIcons) =>
      arrayResult.map((status, i) => {
        if (!status) {
          return <Bomb />;
        } else if (status && !clickedCards[i]) {
          return <StarLose />;
        } else {
          return prevIcons[i];
        }
      })
    );
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
            backgroundColor: !clickedCards[i]
              ? lose
                ? "#071823"
                : "#2B404B"
              : "#071823",

            borderBottom: !clickedCards[i]
              ? !lose
                ? "4px solid #1E2E3A"
                : "none"
              : "none",
          }}
        >
          {cardIcons[i]}
        </button>
      ))}
    </section>
  );
}
