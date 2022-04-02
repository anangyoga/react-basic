const root = document.querySelector("#root");

function App() {
  // sebenarnya bisa pake getElementById, hanya karena sudah pernah belajar useRef untuk manipulasi DOM JS, jadi kita menggunakan useRef
  const namaRef = React.useRef(null);

  const submit = (event) => {
    event.preventDefault();

    // sama aja kaya vanillaJs = namaRef.target.value
    const nama = namaRef.current.value;
    console.log(`Nama ${nama}`);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div>
          <label>Nama Anda: </label>
          {/* jangan lupa deklarasikan ref */}
          <input type="text" name="nama" ref={namaRef} />
        </div>
        <input type="submit" value="Kirim" />
      </form>
    </>
  );
}

ReactDOM.render(<App />, root);
