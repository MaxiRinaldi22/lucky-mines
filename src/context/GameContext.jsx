import { createContext, useEffect, useState } from "react";

const GameContext = createContext();

const GameStateProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const balance = localStorage.getItem("balance");
    return balance ? parseInt(balance) : 0;
  });
  const [inputBet, setInputBet] = useState(1);
  const [numberOfMines, setNumberOfMines] = useState(1);

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  return (
    <GameContext.Provider
      value={{
        balance,
        setBalance,
        inputBet,
        setInputBet,
        numberOfMines,
        setNumberOfMines,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameStateProvider, GameContext };
