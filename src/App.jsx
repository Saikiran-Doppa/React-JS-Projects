import "./App.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtons = (butonText) => {
    if (butonText === "C") {
      setCalVal("");
    } else if (butonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newNum = calVal + butonText;
      setCalVal(newNum);
    }
  };
  return (
    <div className="mainContainer">
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={handleButtons}></ButtonContainer>
    </div>
  );
}

export default App;
