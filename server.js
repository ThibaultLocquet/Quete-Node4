// server.js
require("dotenv").config(); // this line is mandatory when you want to read variables from the '.env' file

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;
const message = `I am ${name}, wilder in ${city}, and I love ${language}`;

console.log(message);
