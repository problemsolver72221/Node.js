"use strict";

const fs = require("fs");

const utilityRead = function() {
  fs.readFile("./todolist.json", "utf8", (err, data) => {
    if (err) {
      console.log("TO DO LIST:");
      console.log("[]");
    } else {
      try {
        let showcase = JSON.parse(data);
        let index = [];
        for (let i = 0; i < showcase.length; i++) {
          index.push("Mission: " + (i + 1) + ":", showcase[i]);
        }
        console.log("TO DO LIST:");
        console.log(index);
      } catch {
        console.log("TO DO LIST:");
        console.log("[]");
      }
    }
  });
};

module.exports = { utilityRead };
