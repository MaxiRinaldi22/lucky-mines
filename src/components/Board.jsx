import { Bomb, StarLose, StarWin } from "./Icons";

export function Board({ arrayResult, config }) {
  const {
    setCardColors,
    cardColors,
    isPlaing,
    setLose,
    lose,
    clickedCards,
    setClickedCards,
    setCardIcons,
    cardIcons,
  } = config;

  const handleClick = (index) => {
    // Color part
    if (!arrayResult[index]) {
      setCardColors(
        arrayResult.map((status, i) =>
          status ? (clickedCards[i] ? "#DDB345" : "#5F5239") : "red"
        )
      );

      setCardIcons((prevIcons) =>
        prevIcons.map((icon, i) => (index === i ? <Bomb /> : icon))
      );
    } else {
      setCardColors((prevColors) =>
        prevColors.map((status, i) => (index === i ? "#DDB345" : status))
      );

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
            backgroundColor: cardColors[i],
            cursor: !isPlaing || lose ? "not-allowed" : "pointer",
          }}
        >
          {cardIcons[i]}
        </button>
      ))}
    </section>
  );
}
