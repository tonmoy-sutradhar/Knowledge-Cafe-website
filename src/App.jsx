import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="bg-cyan-400 text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
