import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRequest } from "ahooks";
import axios from "axios";
import type { HelloResponse } from "contract";

function App() {
  const [msg, setMsg] = useState<string>("Hello Vite + React!");

  const { run, loading } = useRequest(
    async (): Promise<HelloResponse> => {
      return (await axios.get("/api/hello")).data;
    },
    { manual: true, onSuccess: (data) => setMsg(data.message) },
  );
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button disabled={!loading} onClick={() => run}>
          Remote Message is {msg}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
