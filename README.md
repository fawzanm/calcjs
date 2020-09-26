# calcjs
A simple javascript package to chain common math operations.

## Installation
`npm i calcjs`

## Usage
```
const calcjs = require("calcjs");

const number = 2;

const calc = new calcjs(number);

const val = calc.square().cube().value();

console.log(`The result is: ${val}`);


```
