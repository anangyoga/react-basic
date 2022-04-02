const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Login Dulu!"), /*#__PURE__*/React.createElement("p", null, " ", login && "Saya sudah login"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLogin(true)
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);