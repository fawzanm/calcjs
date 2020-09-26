"use strict";

class Calc {
    constructor(number) {
        this.number = number;
    }

    add(n) {
        this.number += n;
        return this;
    }


    subtract(n) {
        this.number -= n;
        return this;
    }

    multiply(n) {
        this.number *= n;
        return this;
    }

    devide(n) {
        this.number /= n; //exception when n=0?
        return this;
    }

    square() {
        this.number = this.number * this.number;
        return this;
    }

    cube() {
        this.number = this.number * this.number * this.number;
        return this;
    }

    value() {
        return this.number;
    }

}

module.exports = Calc;
