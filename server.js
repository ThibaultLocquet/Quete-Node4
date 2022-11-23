// server.js
require("dotenv").config(); // this line is mandatory when you want to read variables from the '.env' file

const name = process.env.NAME;
const city = process.env.CITY;
const language = process.env.LANGUAGE;
const message = `I am ${name}, wilder in ${city}, and I love ${language}`;

console.log(message);
