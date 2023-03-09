"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _FilePicker = require("./components/FilePicker");
Object.keys(_FilePicker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FilePicker[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FilePicker[key];
    }
  });
});