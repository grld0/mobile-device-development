const fahkecel = require(`./temperature`);

let ferenheit = 99.20;
let celcius = fahkecel(fahrenheit);
console.log(`${fahrenheit} F = ${celcius} c`);

const { hitungbmi, kategoribmi } = require(`./bmi`);
const fahkecel = require(`./temperature`);

let weight = 70; // in kilograms
let height = 1.75; // in meters

let bmi = hitungbmi(weight, height);
let bmiCategory = kategoribmi(bmi);

console.log("BMI: " + bmi.toFixed(2));
console.log("BMI Kategori: " + bmiCategory);