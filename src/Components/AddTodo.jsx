import { useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    handleNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
<<<<<<< HEAD
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClick}
          >
=======
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
>>>>>>> 9ffac0a672fdebaee513369b9d9b016b9e7748a1
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
