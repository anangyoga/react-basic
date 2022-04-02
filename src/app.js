const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <h1>Login Dulu!</h1>
      <p> {login && "Saya sudah login"}</p>
      <button onClick={() => setLogin(true)}>Login</button>
    </>
  );
}

ReactDOM.render(<App />, root);
