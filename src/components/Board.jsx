import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { Bomb, BombLose, StarLose, StarWin } from "./Icons";
import diamondSound from "../assets/sound/diamond.wav";
import bomb from "../assets/sound/bomb.wav";

export function Board({ gameState, gameActions, styleActions, card }) {
  const { isPlaing, comulativeMulti, totalBet } = gameActions;
  const { lose, setLose, win, setWin, winArray, setWinArray } = gameActions;
  const { clickedCards, setClickedCards, setBtnText, setBorder, border } = styleActions;
  const { cardIcons, setCardIcons, setClickedCardsReward } = card;
  const { balance, setBalance } = useContext(GameContext);
  const [localClicked, setLocalClicked] = useState(null);

  const handleClick = (index) => {
    if (!gameState[index]) {
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

      setClickedCardsReward((prevClick) =>
        prevClick.map((clicked, i) => (i === index ? true : clicked))
      );

      setCardIcons((prevIcons) =>
        prevIcons.map((icon, i) => (index === i ? <StarWin key={i} /> : icon))
      );

      setWinArray([
        ...winArray.slice(0, index),
        true,
        ...winArray.slice(index + 1),
      ]);
    }

    // Sound
    const diamndSound = new Audio(diamondSound);
    const bombSound = new Audio(bomb);

    if (gameState[index] && !clickedCards[index]) {
      diamndSound.play();
    }

    if (!gameState[index] && !clickedCards[index]) {
      bombSound.play();
    }
  };

  const showResult = () => {
    setCardIcons((prevIcons) =>
      gameState.map((status, i) => {
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

    setBtnText("Play Again");
    setBorder("none");
  };

  const newBalance = balance + totalBet;
  useEffect(() => {
    if (winArray.every((item) => item)) {
      setWin(true);
      setBalance(Number(newBalance.toFixed(2)));
    }
  }, [winArray]);

  useEffect(() => {
    if (win) showResult();
  }, [win]);

  useEffect(() => {
    if (lose) showResult();
  }, [lose]);

  return (
    <section className="container-main-board">
      <div className="win">
        {win && (
          <div className="container-win">
            <h2 className="win-multi">
              {comulativeMulti.toFixed(2)}
              <span>x</span>
            </h2>
            <hr />
            <div className="container-win-amount">
              <h2 className="win-amount">${totalBet.toFixed(2)}</h2>
              <img
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                alt="Bitcon"
              />
            </div>
          </div>
        )}
      </div>
      <section className="container-board">
        {gameState.map((_, i) => (
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
              borderBottom: !clickedCards[i] && border,
            }}
          >
            {cardIcons[i]}
          </button>
        ))}
      </section>
    </section>
  );
}
