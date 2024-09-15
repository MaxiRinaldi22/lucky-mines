import { createContext, useEffect, useState } from "react";

const BalanceContext = createContext();

const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const balance = localStorage.getItem("balance");
    return balance ? parseInt(balance) : 0;
  });

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export { BalanceProvider, BalanceContext };
