const root = document.querySelector("#root");

function App() {
  React.useEffect(() => {
    // promise ada 2 kemungkinan, reject atau resolve
    // reject kalo ada masalah di server, error 500, dll selain 200
    // resolve responya 200
    const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
    });
    console.log(getData);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);