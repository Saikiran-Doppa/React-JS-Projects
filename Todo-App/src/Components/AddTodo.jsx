import { useContext, useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <MdAddToPhotos />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
