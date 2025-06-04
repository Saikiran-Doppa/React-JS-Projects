import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoitems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    setTodoitems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const remItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(remItem);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
