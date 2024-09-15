import { useEffect, useState } from "react";
import { Bomb, BombLose, StarLose, StarWin } from "./Icons";
import diamondSound from "../assets/sound/diamond.wav";
import bomb from "../assets/sound/bomb.wav";

export function Board({ arrayResult, functions, card }) {
  const {
    isPlaing,
    lose,
    setLose,
    clickedCards,
    setClickedCards,
    setBtnText,
    winArray,
    setWinArray,
    setWin,
    win,
  } = functions;
  const { cardIcons, setCardIcons } = card;
  const [localClicked, setLocalClicked] = useState(null);

  const handleClick = (index) => {
    if (!arrayResult[index]) {
      // If is a bomb
      setCardIcons((prevIcons) =>
        prevIcons.map((icon, i) => (index === i ? <Bomb key={i} /> : icon))
      );

      setLocalClicked(index);
      setLose(true);
      setBtnText("Play Again");
    } else {
      // If is a diamond
      setClickedCards((prevClick) =>
        prevClick.map((clicked, i) => (i === index ? true : clicked))
      );

      setCardIcons((prevIcons) =>
        prevIcons.map((icon, i) => (index === i ? <StarWin key={i} /> : icon))
      );

      setWinArray(winArray.map((item, i) => (i === index ? true : item)));
    }

    // Sound
    const diamndSound = new Audio(diamondSound);
    const bombSound = new Audio(bomb);

    if (arrayResult[index]) {
      diamndSound.play();
    } else {
      bombSound.play();
    }
  };

  const showResult = () => {
    setCardIcons((prevIcons) =>
      arrayResult.map((status, i) => {
        if (!status && i === localClicked) {
          return <Bomb key={i} />;
        } else if (!status && !clickedCards[i]) {
          return <BombLose key={i} />;
        } else if (status && !clickedCards[i]) {
          return <StarLose key={i} />;
        } else {
          return prevIcons[i];
        }
      })
    );
  };

  useEffect(() => {
    if (winArray.every((item) => item)) {
      setWin(true);
    }
  }, [winArray]);

  useEffect(() => {
    if (win) {
      showResult();
      setBtnText("Play Again");
    }
  }, [win]);

  useEffect(() => {
    if (lose) {
      showResult();
    }
  }, [lose]);

  return (
    <section className="container-main-board">
      <div className="win">
        {win && (
          <div className="container-win">
            <h2>You Win</h2>
          </div>
        )}
        {lose && (
          <div className="container-win">
            <h2>You Lose</h2>
          </div>
        )}
      </div>
      <section className="container-board">
        {arrayResult.map((_, i) => (
          <button
            key={i}
            className="card"
            onClick={() => {
              handleClick(i);
            }}
            disabled={!isPlaing || lose || win}
            style={{
              backgroundColor: !clickedCards[i]
                ? lose || win
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
    </section>
  );
}
