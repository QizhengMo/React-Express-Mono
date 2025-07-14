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
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Vite + React + Express + Typescript</p>
      <h1>React Plain Old Stack</h1>
      <div className="card">
        <button disabled={loading} onClick={run}>
          Click: Hello {msg}
        </button>
        <p>
          Edit <code>packages/frnt/src/App.tsx</code> and save to test HMR
          <br />
          Edit <code>packages/server/src/main.ts</code> and save to test Server
          Hot Reload
        </p>
      </div>
    </>
  );
}

export default App;
