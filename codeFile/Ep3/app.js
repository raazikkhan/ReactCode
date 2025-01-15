import React from "react";
import reactDom from "react-dom/client";

const heading = <h1 id="heading">hello this is jsx code</h1>;

console.log(heading);
const root = reactDom.createRoot(document.getElementById("root"));
root.render(root);
