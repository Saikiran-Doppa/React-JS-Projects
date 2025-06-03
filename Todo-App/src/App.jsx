import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

function App() {
  let todoItems = [
    { name: "Finish React-JS", dueDate: "10-May-2025" },
    { name: "Revision", dueDate: "10-May-2025" },
    { name: "Lunch", dueDate: "at 1:00pm" },
  ];
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
