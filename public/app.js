const root = document.querySelector("#root"); // beda useRef dan useState
// useState ketika initial valuenya diset, terus diganti maka akan re-render
// useRef tidak melakukan re-render meski initial valuenya udah diganti

function App() {
  // jika diconsole.log, isinya object dengan isi CURRENT doang
  const judulRef = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      // CURRENT digunakan manipulasi DOM
      judulRef.current.textContent = "Aplikasi";
    }, 2000); // empty array agar eksekusi 1 kali doang pada saat komponen dirender
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Application"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);