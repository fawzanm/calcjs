# chain-calc-js
A simple javascript package to chain common math operations.

## Installation
`npm i chain-calc-js`

## Usage
```
const calcjs = require("chain-calc-js");

const number = 2;

const calc = new calcjs(number);

const val = calc.square().cube().value();

console.log(`The result is: ${val}`);


```
