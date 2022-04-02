const root = document.querySelector("#root");

function App() {
  const fruits = ["Apple", "Orange", "Pear", "Watermelon"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, fruits.map(fruit => /*#__PURE__*/React.createElement("li", null, fruit))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);