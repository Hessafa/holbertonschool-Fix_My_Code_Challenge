#!/usr/bin/env node

function printSquare(size) {
  size = parseInt(size, 10);
  if (isNaN(size) || size <= 0) {
    console.log("Invalid size");
    return;
  }
  let line = "#".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
}

if (process.argv.length !== 3) {
  process.exit(1);
}
printSquare(process.argv[2]);
