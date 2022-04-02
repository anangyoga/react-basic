const root = document.querySelector("#root");

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>hasil: {count} </p>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

ReactDOM.render(<App />, root);
