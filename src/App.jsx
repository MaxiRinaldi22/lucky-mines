import { GameStateProvider } from "./context/GameContext";
import GameContainer from "./components/GameContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <GameStateProvider>
      <Header />
      <GameContainer />
    </GameStateProvider>
  );
}

export default App;
