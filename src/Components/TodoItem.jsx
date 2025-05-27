<<<<<<< HEAD
function TodoItem({ todoName, todoDate, onDeleteClick }) {
=======
function TodoItem({ todoName, todoDate }) {
>>>>>>> 9ffac0a672fdebaee513369b9d9b016b9e7748a1
  return (
    <div className="container mySpace">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
<<<<<<< HEAD
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
=======
          <button type="button" className="btn btn-danger">
>>>>>>> 9ffac0a672fdebaee513369b9d9b016b9e7748a1
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
