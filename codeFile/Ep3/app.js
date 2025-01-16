import React from "react";
import reactDom from "react-dom/client";
import "./style.css";

//in react everything is a component

let UserInfo = () => {
  return (
    <div>
      <h2>hello welcome to the Namaste React Course !</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <UserInfo />
      <h1 className="heading">hey this is Razik !</h1>
      <h3 id="slogan">
        im a react developer !{" "}
        <span>
          <button>Hire Mew</button>
        </span>
      </h3>
    </>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);
