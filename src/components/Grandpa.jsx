import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

export const AssetContext = createContext("Gold");

const Grandpa = () => {
  return (
    <div
      style={{
        border: "2px solid yellow",
        borderRadius: "8px",
        padding: "26px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <AssetContext.Provider value="gold">
        <Dad
          asset={"Diamond"}
          style={{
            border: "2px solid yellow",
            borderRadius: "8px",
            padding: "12px",
          }}
        ></Dad>
        <Uncle
          style={{
            border: "2px solid yellow",
            borderRadius: "8px",
            padding: "12px",
          }}
        ></Uncle>
        <Aunty
          style={{
            border: "2px solid yellow",
            borderRadius: "8px",
            padding: "12px",
          }}
        ></Aunty>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context & export it
 * 2. Add provider for the context with a value
 */
