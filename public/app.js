const root = document.querySelector("#root");

function App() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "-"), /*#__PURE__*/React.createElement("p", null, "hasil: ", count, " "), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(0)
  }, "Reset"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);