import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import db from "./util/firebase";
import { uid } from "uid";
import { set, ref, push } from "firebase/database";

ReactDOM.render(<App />, document.getElementById("root"));

var openModalBtn = document.getElementById("open-modal-btn");
openModalBtn.click();
openModalBtn.style.display = "none";

const appName = "khalid-weds-shireen";
// writing to Database
function write(data) {
    // const uuid = uid(32);
    // console.log(uuid);
    // set(ref(db, `/${appName}/${uuid}`), {
    //     data,
    // });
    push(ref(db, `/${appName}/`), 
        data,
    ).then((val) => {
        console.log(val._path.pieces_[1]);
    });
}

write({ name: "Ziya" });
