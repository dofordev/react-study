import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log(
  "%cπ΄ββοΈ  μΌν-μ΄λλ―Ό  π΄ββοΈ",
  "color:#FAE100;font-weight:bold;font-size:2rem;"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
