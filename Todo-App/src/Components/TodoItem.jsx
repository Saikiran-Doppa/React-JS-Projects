import { MdOutlineDelete } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container mySpace">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
