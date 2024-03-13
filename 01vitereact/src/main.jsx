import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherUser = "Sameer";

const ele = createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google",
  anotherUser,
);

ReactDOM.createRoot(document.getElementById("root")).render(ele);
