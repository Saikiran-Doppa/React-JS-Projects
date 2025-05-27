import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handleDeleteItem }) => {
  return (
    <div className="itemContainer">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={handleDeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
