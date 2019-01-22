"use strict";

const fs = require("fs");

const utilityRemove = function(index) {
  try {
    let currentData = fs.readFileSync("./todolist.json");

    let showcase = JSON.parse(currentData);

    let toDoList = [];
    for (let i = 0; i < showcase.length; i++) {
      toDoList.push(showcase[i]);
    }

    if (toDoList.length > 0 && toDoList.length + 1 > index) {
      for (let i = 0; i < toDoList.length + 1; i++) {
        if (i == index) {
          console.log("Mission Removed:", toDoList[i - 1]);
          toDoList.splice(i - 1, 1);
        }
      }
      fs.writeFileSync("./todolist.json", JSON.stringify(toDoList));
    } else {
      let maximum = toDoList.length;
      console.log("Please enter a number between the range of 1 and", maximum);
    }
  } catch {
    console.log(
      "Hey! Calm down. No need to remove anything. List is already empty!"
    );
  }
};

module.exports = { utilityRemove };
