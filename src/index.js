import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var openModalBtn = document.getElementById("open-modal-btn");
openModalBtn.click();
openModalBtn.style.display = "none";