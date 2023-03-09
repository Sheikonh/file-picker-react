"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSPropertiesToComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
const CSSPropertiesToComponent = dict => {
  let str = '';
  for (const [key, value] of Object.entries(dict)) {
    let clo = '';
    key.split('').forEach(lt => {
      if (lt.toUpperCase() === lt) {
        clo += '-' + lt.toLowerCase();
      } else {
        clo += lt;
      }
    });
    str += clo + ':' + value + ';';
  }
  return str;
};
exports.CSSPropertiesToComponent = CSSPropertiesToComponent;