const root = document.querySelector("#root");

function App() {
  React.useEffect(() => {
    // promise ada 2 kemungkinan, reject atau resolve
    // reject kalo ada masalah di server, error 500, dll selain 200
    // resolve responya 200
    const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });

    console.log(getData);
  }, []);
  return (
    <>
      <h1>Data Fetch</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
