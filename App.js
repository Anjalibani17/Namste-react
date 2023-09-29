import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h2",
    { id: "heading", xyz: "abc" },
    "hello from react"
); //it take 3 arguments 1)tag 2)attribute 3) inner html

//when we use react create ele then it create react object then it is converted to html tag which browser understand
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading); //object //props are child
//render method is converting a object heading into h2 tag
//if we want to create nested structure like..
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is anjali "),
    React.createElement("h2", {}, "this is h2"),
  ])
);
root.render(parent);

const other = ReactDOM.createRoot(document.getElementById("other"));
const parent2 = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "this is h1"),
        React.createElement("h2", {}, "this is h2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "this is h1"),
        React.createElement("h2", {}, "this is h2"),
    ])]
    //we will pass array of siblings 
);
other.render(parent2);