import { BalanceProvider } from "./context/BalanceContext";
import GameContainer from "./components/GameContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BalanceProvider>
      <Header />
      <GameContainer />
    </BalanceProvider>
  );
}

export default App;
