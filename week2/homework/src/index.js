"use strict";

// TODO: Write the homework code in this file

const fs = require("fs");
const todos = require("./utility/utilityAdd");
const read = require("./utility/utilityRead");
const remove = require("./utility/utilityRemove");
const update = require("./utility/utilityUpdate");
const reset = require("./utility/utilityReset");
const help = require("./utility/utilityHelp");

let arg = process.argv;
let command = arg[2];
let userInput = arg[3];
let userUpdateInput = arg[4];

switch (command) {
  case "add":
    todos.utilityAdd(userInput);
    break;
  case "list":
    read.utilityRead();
    break;
  case "remove":
    let int = parseInt(userInput);

    if (Number.isInteger(int) && int > 0) {
      remove.utilityRemove(userInput);
    } else {
      console.log("Error : You need to enter a valid number");
    }
    break;
  case "update":
    let intUp = parseInt(userInput);

    if (Number.isInteger(intUp) && intUp > 0) {
      update.utilityUpdate(userInput, userUpdateInput);
    } else {
      console.log("Error : You need to enter a valid number");
    }
    break;
  case "reset":
    reset.utilityReset();
    break;
  case "help":
    console.log(help.help);
    break;
  default:
    console.log(help.help);
}
