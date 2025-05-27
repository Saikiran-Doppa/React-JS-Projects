import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
<<<<<<< HEAD
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
=======

function App() {
  let todoItems = [
    {
      name: "Finish React-JS",
      dueDate: "31-May-2025",
    },
    {
      name: "Revision",
      dueDate: "31-May-2025",
    },
    {
      name: "Dinner",
      dueDate: "In 1 hour",
    },
  ];
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
>>>>>>> 9ffac0a672fdebaee513369b9d9b016b9e7748a1
    </center>
  );
}

export default App;
