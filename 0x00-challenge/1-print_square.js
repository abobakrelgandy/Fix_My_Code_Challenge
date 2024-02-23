#!/usr/bin/node
// 1-print_square.js

function printSquare(size) {
    if (size <= 0) {
        console.log("Size must be a positive integer.");
        return;
    }

    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            row += "#";
        }
        console.log(row);
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: ./1-print_square.js <size>");
    process.exit(1);
}

const size = parseInt(process.argv[2]);
printSquare(size);

