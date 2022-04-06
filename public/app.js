const root = document.querySelector("#root");

function App() {
  // 1. buat eventlistener dengan state
  // 2. buat onChange pada input dengan event, set value untuk buat controlled component
  // 3. buat function handler pada form & eventPreventDefault(), log activity
  // 4. setelah dapet log activity, push ke array dengan membuat state  todo, buat state dgn empty array
  // 5. buat state todo dengan useState empty array, setTodos dan masukkin activity ke array. activity kan apa yang mau dirender ulang, dan dia adalah array jadi setTodos([activity]), jadi ketika disubmit akan masuk ke state activity, log todos
  // 6. map pada komponen yg ditampilkan FE
  // 7. setTodos([activity]) array ini hanya menghapus array yang lama, bukan mempertahankan data lama dan menambahkan data baru. PRINSIP STATE: ketika diset, dia akan mengganti data yang lama. makannya harus dimanipulasi.
  // 8. gunakan Spread Operator utnuk ekstrak semua elemen di dalam array todos ke dalam array baru pada setTodos. ibaratnya ini data lama ditambah data baru
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addTodoHandler = event => {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity("");
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
  }, "Add"), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => /*#__PURE__*/React.createElement("li", null, todo)))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);