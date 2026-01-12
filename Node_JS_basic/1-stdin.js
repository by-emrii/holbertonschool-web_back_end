#!/usr/bin/node

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdout.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString().trim()}`)
})

process.stdin.on('end', () => {
    process.stdout.write("This important software is now closing\n")
})