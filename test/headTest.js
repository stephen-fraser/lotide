const head = require("../head.js")
const assertEqual = require('../assertEqual');

// Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Test"]), "Test");
assertEqual(head([]), "Fail"); 

