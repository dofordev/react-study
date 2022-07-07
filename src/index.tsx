import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log(
  "%c🚴‍♀️  야핏-어드민  🚴‍♀️",
  "color:#FAE100;font-weight:bold;font-size:2rem;"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
