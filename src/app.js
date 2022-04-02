const root = document.querySelector("#root");

function App() {
  const [name, setName] = React.useState("");

  const submit = (event) => {
    event.preventDefault();

    console.log(`Nama: ${name}`);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div>
          <label>Nama: </label>
          {/* ini namanya controlled component, kita bikin state dan set state-nya berdasarkan input value, store, lalu diakses isi dari value dari input tersebut */}

          <input type="text" name="nama" value={name} onChange={(event) => setName(event.target.value)} />
          {/* JANGAN LUPA gunakan value={name}, agar value-nya bergantung pada state */}
        </div>
        <input type="submit" value="Kirim" />
      </form>
    </>
  );
}

ReactDOM.render(<App />, root);
