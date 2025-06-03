import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  const [todoItems, setTodoitems] = useState([]);

  const onNewItem = (itemName, itemDate) => {
    const newItem = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoitems(newItem);
  };

  const onDeleteItem = (todoItemName) => {
    const remItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(remItem);
  };
  return (
    <center>
      <AppName></AppName>
      <AddTodo onNewItem={onNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItems={todoItems} onDeleteItem={onDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
