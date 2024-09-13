import { Menu } from "../components/Menu";
import { Board } from "../components/Board";
import { useEffect, useState } from "react";
import { useGame } from "../hooks/useGame";

function GameContainer() {
  const [selectedValue, setSelectedValue] = useState(1);
  const [arrayResult, setArratResult] = useState(useGame(1));
  const [isPlaing, setIsPlaing] = useState(false);
  const [lose, setLose] = useState(false);
  const [cardColors, setCardColors] = useState(
    Array(arrayResult.length).fill("#24263e")
  );

  const [clickedCards, setClickedCards] = useState(
    Array(arrayResult.length).fill(false)
  );

  const [cardIcons, setCardIcons] = useState(Array(arrayResult.length).fill(null));

  const array = useGame(selectedValue);
  useEffect(() => {
    setArratResult(array);
    setCardColors(Array(arrayResult.length).fill("#24263e"));
    setIsPlaing(false);
  }, [selectedValue]);

  const handleRestart = () => {
    setArratResult(array);
    setCardColors(Array(arrayResult.length).fill("#24263e"));
    setClickedCards(Array(arrayResult.length).fill(false));
    setCardIcons(Array(arrayResult.length).fill(null));
    setIsPlaing(false);
    setLose(false);
    setLose(false);
  };

  const handleStartClick = () => {
    setIsPlaing(true);
  };
  // ORDER PROPS
  return (
    <main className="container-main">
      <Menu
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        handleRestart={handleRestart}
        handleStartClick={handleStartClick}
        isPlaing={isPlaing}
        lose={lose}
      />
      <Board
        arrayResult={arrayResult}
        config={{
          cardColors,
          setCardColors,
          setIsPlaing,
          isPlaing,
          setLose,
          lose,
          setClickedCards,
          clickedCards,
          setCardIcons,
          cardIcons,
        }}
      />
    </main>
  );
}

export default GameContainer;
