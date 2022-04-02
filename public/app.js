const root = document.querySelector("#root");

function App() {
  const [name, setName] = React.useState("");

  const submit = event => {
    event.preventDefault();
    console.log(`Nama: ${name}`);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: name,
    onChange: event => setName(event.target.value)
  })), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Kirim"
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);