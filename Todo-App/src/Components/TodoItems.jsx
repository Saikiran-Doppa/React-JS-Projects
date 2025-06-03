import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <div className="itemContainer">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
