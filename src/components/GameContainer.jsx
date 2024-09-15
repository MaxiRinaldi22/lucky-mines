import { Menu } from "../components/Menu";
import { Board } from "../components/Board";
import { useContext, useEffect, useState } from "react";
import { useGame } from "../hooks/useGame.js";
import { GameContext } from "../context/GameContext.jsx";

function GameContainer() {
  // Game state
  const [gameState, setGameState] = useState(useGame(1));

  const [isPlaing, setIsPlaing] = useState(false);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [winArray, setWinArray] = useState(gameState.map((item) => !item));
  const { balance, setBalance, inputBet, setInputBet, numberOfMines } =
    useContext(GameContext);
  // UI state
  const [border, setBorder] = useState("4px solid #1E2E3A");
  const [btnText, setBtnText] = useState("Play");
  const [btnColor, setBtnColor] = useState("#00E701");
  const [clickedCards, setClickedCards] = useState(
    Array(gameState.length).fill(false)
  );
  const [cardIcons, setCardIcons] = useState(
    Array(gameState.length).fill(null)
  );

  const array = useGame(numberOfMines);
  useEffect(() => {
    setGameState(array);
    setIsPlaing(false);
    setWinArray(array.map((item) => !item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfMines]);

  const handleRestart = () => {
    setGameState(array);
    setWinArray(array.map((item) => !item));
    setClickedCards(Array(gameState.length).fill(false));
    setCardIcons(Array(gameState.length).fill(null));
    setIsPlaing(false);
    setLose(false);
    setWin(false);
    setInputBet(1);

    // if (win) {
    //   setBalance(balance +   );
    // }

    setBorder("4px solid #1E2E3A");
    setBtnColor("#00b100");
    setBtnText("Calculating balance...");
    setTimeout(() => {
      setBtnColor("#00E701");
      setBtnText("Play");
    }, 300);
  };

  const handleCashout = () => {
    setGameState(array);
    setWinArray(array.map((item) => !item));
    setClickedCards(Array(gameState.length).fill(false));
    setCardIcons(Array(gameState.length).fill(null));
    setIsPlaing(false);
    setLose(false);
    setWin(false);
    setInputBet(1);

    setBalance(parseInt(balance) + parseInt(inputBet));

    setBtnColor("#00b100");
    setBtnText("Cashing out...");
    setTimeout(() => {
      setBtnColor("#00E701");
      setBtnText("Play");
    }, 300);
  };

  const handleStartClick = () => {
    if (balance >= inputBet && inputBet >= 1) {
      setBalance(balance - inputBet);
    }

    setBtnColor("#00b100");
    setBtnText("Starting...");
    setTimeout(() => {
      setBtnColor("#00E701");
      setBtnText("Cashout");
      setIsPlaing(true);
    }, 300);
  };

  return (
    <main className="container-game">
      <Menu
        functions={{
          handleRestart,
          handleStartClick,
          handleCashout,
        }}
        gameActions={{
          isPlaing,
          lose,
          win,
        }}
        styleActions={{
          btnColor,
          btnText,
        }}
      />
      <Board
        gameState={gameState}
        gameActions={{
          isPlaing,
          lose,
          setLose,
          win,
          setWin,
          winArray,
          setWinArray,
        }}
        styleActions={{
          clickedCards,
          setClickedCards,
          setBtnText,
          setBorder,
          border,
        }}
        card={{
          setCardIcons,
          cardIcons,
        }}
      />
    </main>
  );
}

export default GameContainer;
