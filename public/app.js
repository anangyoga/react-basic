const root = document.querySelector("#root");

function App() {
  // 1. buat function untuk generate ID
  // 2. ganti activity pada setTodos menjadi multi-dimensional array
  // 3. pada mapping <li>{todo}</li> itu tidak bisa dirender karena bentuknya object, maka harus ditembak ke propertinya jadi <li>{todo.activity}</li>, tambahkan juga todo.id
  // 4. buat onClick={removeHandler}
  // 5. gunakan parameter todoId untuk nembak Id yang akan dihapus
  // 6. fungsi hapus menggunakan filter, jadi kalau todo.id !== todoId, masukkan ke setTodos(filteredTodos)
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const generateID = () => {
    return Date.now();
  };

  const addTodoHandler = event => {
    event.preventDefault();
    setTodos([...todos, {
      id: generateID(),
      activity
    }]);
    setActivity("");
  };

  const removeTodoHandler = todoId => {
    const filteredTodos = todos.filter(todo => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    value: activity,
    type: "text",
    placeholder: "add activity ..",
    onChange: event => setActivity(event.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add"), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => /*#__PURE__*/React.createElement("li", {
    key: todo.id
  }, todo.activity, /*#__PURE__*/React.createElement("button", {
    onClick: removeTodoHandler.bind(this, todo.id)
  }, "X"))))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);