import "./App.css";
import Heading from "./Components/Heading";
import ErrorMsg from "./Components/ErrorMsg";
import FoodItem from "./Components/FoodItem";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFooditems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value;
      event.target.value = "";
      const newItem = [...foodItems, newFoodItem];
      setFooditems(newItem);
    }
  };

  return (
    <Container>
      <Heading></Heading>
      <FoodInput handleOnKey={onKeyDown}></FoodInput>
      <ErrorMsg foodItems={foodItems}></ErrorMsg>
      <FoodItem foodItems={foodItems}></FoodItem>
    </Container>
  );
}

export default App;
