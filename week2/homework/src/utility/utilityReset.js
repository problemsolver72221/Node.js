"use strict";

const fs = require("fs");

const utilityReset = function() {
  let currentData = fs.readFileSync("todolist.json");
  let showcase = JSON.parse(currentData);
  let resetArray = [];

  if (showcase.length === 0) {
    console.log("List is already empty");
  } else {
    console.log("To-do list is reset to zero");
    fs.writeFileSync("todolist.json", JSON.stringify(resetArray));
  }
};

module.exports = {
  utilityReset
};
