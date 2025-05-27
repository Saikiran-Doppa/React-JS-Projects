import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) => {
    const newItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItem);
  };

  const onDeleteItem = (todoItemName) => {
    const remItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(remItem);
  };

  return (
    <center>
      <AppName></AppName>
      <AddTodo handleNewItem={onNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        handleDeleteItem={onDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
