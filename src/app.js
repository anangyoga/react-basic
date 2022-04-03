const root = document.querySelector("#root");

function App() {
  // async await pada reactJs digunakan di useEffect

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");

      const response = await request.json();
      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);
  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>Loading data ...</i>
      ) : (
        <ul>
          {news.map((item) => {
            console.log(item);
            return (
              <li key={item.id}>
                {item.id} - {item.title} : {item.newsSite}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
