import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
