import { useContext } from "react";

import "./App.css";
import holochainLogo from "./assets/holochainLogo.svg";
import { ClientContext } from "./ClientContext";

const App = () => {
  const { error, loading } = useContext(ClientContext);
  return (
    <>
      <div>
        <a href="https://developer.holochain.org/get-started/" target="_blank">
          <img src={holochainLogo} className="logo holochain" alt="holochain logo" />
        </a>
      </div>
      <h1>Holochain React hApp</h1>
      <div>
        <div className="card">
          {loading ? "connecting..." : (error ? error.message : "Client is connected.")}
        </div>
        <p>
          Import scaffolded components into <code>src/App.tsx</code> to use your hApp
        </p>
        <p className="read-the-docs">
          Click on the Holochain logo to learn more
        </p>
      </div>
    </>
  );
};

export default App;
