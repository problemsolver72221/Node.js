"use strict";

const fs = require("fs");

const utilityAdd = title => {
  let todos = [];
  let todo = {
    title
  };

  //Try to read the json file:

  try {
    let todosString = fs.readFileSync("./todolist.json");
    todos = JSON.parse(todosString);
  } catch (err) {}

  //Check if there is any data inside the json file:
  if (todos.length === 0) {
    // If there is no data, just push the user input:
    todos.push(todo);
    fs.writeFileSync("./todolist.json", JSON.stringify(todos));
  } else {
    // If there is data inside the json file, read it first.
    let writtenJson = fs.readFileSync("./todolist.json");
    // Then parse it & store it inside the todos array.
    todos = JSON.parse(writtenJson);
    // Push the current input to that array.
    todos.push(todo);
    // Write back the updated data in json format to the file:
    fs.writeFileSync("./todolist.json", JSON.stringify(todos));
  }
};

module.exports = {
  utilityAdd
};
