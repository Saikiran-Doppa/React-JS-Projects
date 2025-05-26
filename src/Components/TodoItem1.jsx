function TodoItem1() {
  let todoName = "Finish React-JS";
  let todoDate = "31-May-2025";
  return (
    <div class="container mySpace">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
