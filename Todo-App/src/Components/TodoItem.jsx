import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container mySpace">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(todoName)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
