const root = document.querySelector("#root");

function App() {
  const fruits = ["Apple", "Orange", "Pear", "Watermelon"];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
