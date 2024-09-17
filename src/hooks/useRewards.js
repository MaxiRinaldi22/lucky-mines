import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export function useRewards() {
  const { numberOfMines, inputBet } = useContext(GameContext);
  const minesCount = Number(numberOfMines);

  let multi = 0;
  switch (minesCount) {
    case 1:
      multi = 0.01;
      break;
    case 2:
      multi = 0.05;
      break;
    case 3:
      multi = 0.1;
      break;
    case 4:
      multi = 0.15;
      break;
    case 5:
      multi = 0.18;
      break;
    case 6:
      multi = 0.22;
      break;
    case 7:
      multi = 0.3;
      break;
    case 8:
      multi = 0.33;
      break;
    case 9:
      multi = 0.39;
      break;
    case 10:
      multi = 0.45;
      break;
    case 11:
      multi = 0.95;
      break;
    case 12:
      multi = 1;
      break;
    case 13:
      multi = 1.05;
      break;
    case 14:
      multi = 1.25;
      break;
    case 15:
      multi = 1.5;
      break;
    case 16:
      multi = 1.75;
      break;
    case 17:
      multi = 2;
      break;
    case 18:
      multi = 2.25;
      break;
    case 19:
      multi = 2.5;
      break;
    case 20:
      multi = 2.75;
      break;
    case 21:
      multi = 3;
      break;
    case 22:
      multi = 3.25;
      break;
    case 23:
      multi = 3.5;
      break;
    case 24:
      multi = 3.75;
      break;
    case 25:
      multi = 4;
      break;
    default:
      multi = 0;
      break;
  }

  const betMulti = 1 + inputBet / 1000
  multi = multi * betMulti
  
  return multi;
}
