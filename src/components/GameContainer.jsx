import { Menu } from "../components/Menu";
import { Board } from "../components/Board";
import { useEffect, useState } from "react";
import { useGame } from "../hooks/useGame";

function GameContainer() {
  const [selectedValue, setSelectedValue] = useState(1);
  const [arrayResult, setArratResult] = useState(useGame(1));
  const [isPlaing, setIsPlaing] = useState(false);
  const [lose, setLose] = useState(false);
  const [clickedCards, setClickedCards] = useState(
    Array(arrayResult.length).fill(false)
  );
  const [cardIcons, setCardIcons] = useState(
    Array(arrayResult.length).fill(null)
  );

  const array = useGame(selectedValue);
  useEffect(() => {
    setArratResult(array);

    setIsPlaing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const handleRestart = () => {
    setArratResult(array);
    setClickedCards(Array(arrayResult.length).fill(false));
    setCardIcons(Array(arrayResult.length).fill(null));
    setIsPlaing(false);
    setLose(false);
  };

  const handleStartClick = () => {
    setIsPlaing(true);
  };

  return (
    <main className="container-game">
      <Menu
        functions={{
          handleRestart,
          handleStartClick,
        }}
        states={{
          selectedValue,
          setSelectedValue,
          isPlaing,
          lose,
        }}
      />
      <Board
        arrayResult={arrayResult}
        functions={{
          isPlaing,
          lose,
          setLose,
          clickedCards,
          setClickedCards,
        }}
        card={{
          cardIcons,
          setCardIcons,
        }}
      />
    </main>
  );
}

export default GameContainer;
