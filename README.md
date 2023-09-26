# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sfraser/lotide`

**Require it:**

`const _ = require('@sfraser/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: compares two arrays and asserts if they are equal.

* `assertEqual(actual, expected)`: compares primitive data types and asserts if they are equal.

* `assertObjectEqual(actual, expected)`: compares two objects and asserts if they are equal.

* `countLetters(letters)`: takes the letter count of a string and returns the value.

* `countOnly(allItems, itemToCount)`: allItems is an array that needs to be looked through an itemsToCount specifies what to count.

* `eqArrays(array1, array2)`: takes two arrays and returns true if they are equal and false if they are not. 

* `eqObjects(object1, object2)`: compares two objects and returns true if they are equal and false if they are not.

* `findKey(object, callback)`: takes an object and callback function to be applied to a specific key.

* `findKeyByValue(object, value)`: takes an object and value and returns a key with the specified value.

* `head(array)`: takes an array and returns the first value in that array.

* `letterPositions(string)`: takes a string and returns an object where the keys are the letter and the value is an array of the letters location in the original string.

* `map(array, callback)`: takes an array and callback and allows the callback to be executed on every value in that array and returns a new array.

* `middle(array)`: takes an array and returns the middle value or values (if it is an even number in length array) of the array

* `tail(array))`: takes an array and returns the array without the first value.

* `takeUntil(array, callback)`: takes an array and callback and returns the array up until the point callback is acheived.

* `without(array1, array2)`: takes two arrays and returns a new array that has all the elements in array1 not found in array2. 



