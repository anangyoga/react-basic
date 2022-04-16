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

  const addTodoHandler = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: generateID(),
        activity,
      },
    ]);
    setActivity("");
  };

  const removeTodoHandler = (todoId) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTodoHandler}>
        <input value={activity} type="text" placeholder="add activity .." onChange={(event) => setActivity(event.target.value)} />
        <button type="submit">Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.activity}
              <button onClick={removeTodoHandler.bind(this, todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

ReactDOM.render(<App />, root);
