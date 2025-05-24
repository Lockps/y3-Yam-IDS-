import { createContext, useContext, useState } from "react";

const RiskContext = createContext();

export const RiskProvider = ({ children }) => {
  const [riskValues, setRiskValues] = useState([]);

  return (
    <RiskContext.Provider value={{ riskValues, setRiskValues }}>
      {children}
    </RiskContext.Provider>
  );
};

export const useRiskContext = () => useContext(RiskContext);
