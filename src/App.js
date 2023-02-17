import React from "react";
import ComponentA from "./Comps/ComponentA";
export const userContext = React.createContext();

function App() {
  return (
    <>
      <h1>Hooks Learning</h1>
      <userContext.Provider value={"I am provided value"}>
        <ComponentA />
      </userContext.Provider>
    </>
  );
}
export default App;
