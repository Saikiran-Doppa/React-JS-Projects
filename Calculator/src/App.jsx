import "./App.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayvalue = calVal + buttonText;
      setCalVal(newDisplayvalue);
    }
  };

  return (
    <div className="mainContainer">
      <Display displayValue={calVal}></Display>
      <ButtonContainer handleButtonClick={handleButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
