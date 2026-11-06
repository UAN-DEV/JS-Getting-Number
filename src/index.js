"use strict";

function gettingNumber(num) {
  switch (true) {
    case num === 1: return "1";
    case num <= 0: return null;
    case !!gettingNumber(num / 3): return `(${gettingNumber(num / 3)} * 3)`;
    case !!gettingNumber(num - 5): return `(${gettingNumber(num - 5)} + 5)`;
    default: return null;
  }
}

console.log(`13=>${gettingNumber(13)}`);
console.log(`15=>${gettingNumber(15)}`);
console.log(`77=>${gettingNumber(77)}`);
console.log(`103=>${gettingNumber(103)}`);
console.log(`178=>${gettingNumber(178)}`);