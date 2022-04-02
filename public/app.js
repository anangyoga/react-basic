const root = document.querySelector("#root");

function App() {
  // sebenarnya bisa pake getElementById, hanya karena sudah pernah belajar useRef untuk manipulasi DOM JS, jadi kita menggunakan useRef
  const namaRef = React.useRef(null);

  const submit = event => {
    event.preventDefault(); // sama aja kaya vanillaJs = namaRef.target.value

    const nama = namaRef.current.value;
    console.log(`Nama ${nama}`);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama Anda: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Kirim"
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);