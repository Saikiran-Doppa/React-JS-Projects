import TodoItem from "./TodoItem";

<<<<<<< HEAD
const TodoItems = ({ todoItems, handleDeleteItem }) => {
=======
const TodoItems = ({ todoItems }) => {
>>>>>>> 9ffac0a672fdebaee513369b9d9b016b9e7748a1
  return (
    <div className="itemContainer">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
<<<<<<< HEAD
          onDeleteClick={handleDeleteItem}
=======
>>>>>>> 9ffac0a672fdebaee513369b9d9b016b9e7748a1
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
