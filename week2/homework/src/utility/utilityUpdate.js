"use strict";

const fs = require("fs");

const utilityUpdate = function(index, updateValue) {
  try {
    let currentData = fs.readFileSync("todolist.json");

    let showcase = JSON.parse(currentData);

    let toDoList = [];
    for (let i = 0; i < showcase.length; i++) {
      toDoList.push(showcase[i]);
    }

    if (updateValue == undefined) {
      throw new Error(
        console.log("Please enter the update value after item number")
      );
    }

    if (toDoList.length > 0 && toDoList.length + 1 > index) {
      for (let i = 0; i < toDoList.length + 1; i++) {
        if (i == index) {
          console.log(
            "Mission Updated:",
            "\nOld value was:",
            toDoList[i - 1],
            "\nNew value is:",
            updateValue
          );
          toDoList.splice(i - 1, 1, { title: updateValue });
        }
      }
      fs.writeFileSync("todolist.json", JSON.stringify(toDoList));
    } else {
      let maximum = toDoList.length;
      console.log("Please enter a number between the range of 1 and", maximum);
    }
  } catch {
    console.log("");
  }
};

module.exports = { utilityUpdate };
